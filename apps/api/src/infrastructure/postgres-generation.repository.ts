import { randomUUID } from "node:crypto";
import type { GenerationQueueJob } from "@invite/generation-queue";
import type {
  CreateGenerationJobInput,
  GenerationIdempotencyRecord,
  GenerationIdempotencyRepository,
  GenerationJobRecord,
  GenerationJobRepository,
} from "@invite/generation-persistence";

interface QueryResult<Row> {
  rows: Row[];
  rowCount?: number | null;
}

export interface SqlExecutor {
  query<Row = Record<string, unknown>>(
    sql: string,
    parameters?: readonly unknown[],
  ): Promise<QueryResult<Row>>;
}

interface SqlConnection extends SqlExecutor {
  release(): void;
}

export interface SqlPool extends SqlExecutor {
  connect(): Promise<SqlConnection>;
}

interface JobRow {
  id: string;
  invitation_id: string;
  content_hash: string;
  status: GenerationJobRecord["status"];
  spec: GenerationJobRecord["spec"];
  plan: GenerationJobRecord["plan"] | null;
  error: GenerationJobRecord["error"] | null;
  created_at: Date | string;
  updated_at: Date | string;
}

interface IdempotencyRow {
  invitation_id: string;
  idempotency_key: string;
  content_hash: string;
  job_id: string;
  created_at: Date | string;
}

const toIsoString = (value: Date | string): string =>
  value instanceof Date ? value.toISOString() : new Date(value).toISOString();

const toJobRecord = (row: JobRow): GenerationJobRecord => ({
  id: row.id,
  invitationId: row.invitation_id,
  contentHash: row.content_hash,
  status: row.status,
  spec: row.spec,
  ...(row.plan ? { plan: row.plan } : {}),
  ...(row.error ? { error: row.error } : {}),
  createdAt: toIsoString(row.created_at),
  updatedAt: toIsoString(row.updated_at),
});

const toIdempotencyRecord = (row: IdempotencyRow): GenerationIdempotencyRecord => ({
  invitationId: row.invitation_id,
  idempotencyKey: row.idempotency_key,
  contentHash: row.content_hash,
  jobId: row.job_id,
  createdAt: toIsoString(row.created_at),
});

const jobColumns = "id, invitation_id, content_hash, status, spec, plan, error, created_at, updated_at";
const idempotencyColumns = "invitation_id, idempotency_key, content_hash, job_id, created_at";

/** Accepts a pg-compatible pool without coupling domain packages to a driver. */
export class PostgresGenerationJobRepository implements GenerationJobRepository {
  public constructor(private readonly pool: SqlPool) {}

  public async create(input: CreateGenerationJobInput): Promise<GenerationJobRecord> {
    return this.persistQueuedJob(input);
  }

  private async persistQueuedJob(
    input: CreateGenerationJobInput,
    idempotency?: GenerationIdempotencyRecord,
  ): Promise<GenerationJobRecord> {
    if (
      idempotency &&
      (input.id !== idempotency.jobId ||
        input.invitationId !== idempotency.invitationId ||
        input.contentHash !== idempotency.contentHash)
    ) {
      throw new Error("Generation job and idempotency record must describe the same request.");
    }

    const connection = await this.pool.connect();
    let transactionStarted = false;

    try {
      await connection.query("BEGIN");
      transactionStarted = true;

      const jobResult = await connection.query<JobRow>(
        `INSERT INTO generation_jobs
          (id, invitation_id, content_hash, status, spec, created_at, updated_at)
         VALUES ($1, $2, $3, 'queued', $4::jsonb, $5::timestamptz, $5::timestamptz)
         RETURNING ${jobColumns}`,
        [input.id, input.invitationId, input.contentHash, JSON.stringify(input.spec), input.createdAt],
      );
      const row = jobResult.rows[0];
      if (!row) throw new Error("PostgreSQL did not return the created generation job.");

      if (idempotency) {
        await connection.query(
          `INSERT INTO generation_idempotency_keys
            (invitation_id, idempotency_key, content_hash, job_id, created_at)
           VALUES ($1, $2, $3, $4, $5::timestamptz)`,
          [idempotency.invitationId, idempotency.idempotencyKey, idempotency.contentHash, idempotency.jobId, idempotency.createdAt],
        );
      }

      await connection.query(
        `INSERT INTO generation_outbox
          (id, job_id, event_type, payload, status, created_at)
         VALUES ($1, $2, 'generation.requested', $3::jsonb, 'pending', $4::timestamptz)`,
        [
          randomUUID(),
          input.id,
          JSON.stringify({
            jobId: input.id,
            invitationId: input.invitationId,
            contentHash: input.contentHash,
            spec: input.spec,
            enqueuedAt: input.createdAt,
          }),
          input.createdAt,
        ],
      );

      await connection.query("COMMIT");
      transactionStarted = false;
      return toJobRecord(row);
    } catch (error) {
      if (transactionStarted) {
        try {
          await connection.query("ROLLBACK");
        } catch {
          // Preserve the original query/commit error.
        }
      }
      throw error;
    } finally {
      connection.release();
    }
  }

  public async findById(id: string): Promise<GenerationJobRecord | undefined> {
    const result = await this.pool.query<JobRow>(
      `SELECT ${jobColumns} FROM generation_jobs WHERE id = $1`,
      [id],
    );
    const row = result.rows[0];
    return row ? toJobRecord(row) : undefined;
  }

  public async update(
    id: string,
    patch: Partial<Pick<GenerationJobRecord, "status" | "plan" | "error" | "updatedAt">>,
  ): Promise<GenerationJobRecord> {
    const result = await this.pool.query<JobRow>(
      `UPDATE generation_jobs
       SET status = COALESCE($2, status),
           plan = CASE WHEN $3::boolean THEN $4::jsonb ELSE plan END,
           error = CASE WHEN $5::boolean THEN $6::jsonb ELSE error END,
           updated_at = COALESCE($7::timestamptz, NOW())
       WHERE id = $1
         AND (
           $2::text IS NULL
           OR $2 = status
           OR (status = 'queued' AND $2 IN ('running', 'failed'))
           OR (status = 'running' AND $2 IN ('succeeded', 'failed'))
           OR (status = 'failed' AND $2 = 'queued')
         )
       RETURNING ${jobColumns}`,
      [
        id,
        patch.status ?? null,
        Object.hasOwn(patch, "plan"),
        patch.plan === undefined ? null : JSON.stringify(patch.plan),
        Object.hasOwn(patch, "error"),
        patch.error === undefined ? null : JSON.stringify(patch.error),
        patch.updatedAt ?? null,
      ],
    );
    const row = result.rows[0];
    if (row) return toJobRecord(row);

    const existing = await this.findById(id);
    if (!existing) throw new Error("Generation job not found.");
    throw new Error(`Invalid generation job status transition: ${existing.status} -> ${patch.status}.`);
  }

  /** Atomically persists a keyed request so no orphan idempotency record remains. */
  public async createIdempotent(
    input: CreateGenerationJobInput,
    idempotency: GenerationIdempotencyRecord,
  ): Promise<GenerationJobRecord> {
    return this.persistQueuedJob(input, idempotency);
  }
}

export class PostgresGenerationIdempotencyRepository implements GenerationIdempotencyRepository {
  public constructor(private readonly pool: SqlPool) {}

  public async find(
    invitationId: string,
    idempotencyKey: string,
  ): Promise<GenerationIdempotencyRecord | undefined> {
    const result = await this.pool.query<IdempotencyRow>(
      `SELECT ${idempotencyColumns}
       FROM generation_idempotency_keys
       WHERE invitation_id = $1 AND idempotency_key = $2`,
      [invitationId, idempotencyKey],
    );
    const row = result.rows[0];
    return row ? toIdempotencyRecord(row) : undefined;
  }

  public async create(
    record: GenerationIdempotencyRecord,
  ): Promise<GenerationIdempotencyRecord> {
    const result = await this.pool.query<IdempotencyRow>(
      `INSERT INTO generation_idempotency_keys
        (invitation_id, idempotency_key, content_hash, job_id, created_at)
       VALUES ($1, $2, $3, $4, $5::timestamptz)
       RETURNING ${idempotencyColumns}`,
      [record.invitationId, record.idempotencyKey, record.contentHash, record.jobId, record.createdAt],
    );
    const row = result.rows[0];
    if (!row) throw new Error("PostgreSQL did not return the idempotency record.");
    return toIdempotencyRecord(row);
  }
}


interface OutboxRow {
  id: string;
  payload: GenerationQueueJob;
}

/**
 * PostgreSQL outbox operations for an at-least-once dispatcher.
 * Claimed rows are leased; a crashed dispatcher can be recovered after lease expiry.
 */
export class PostgresGenerationOutboxRepository {
  public constructor(private readonly pool: SqlPool) {}

  public async claimBatch(
    limit: number,
    leaseDurationMs: number,
  ): Promise<Array<{ id: string; payload: GenerationQueueJob }>> {
    if (!Number.isInteger(limit) || limit < 1) {
      throw new RangeError("Outbox batch limit must be a positive integer.");
    }
    if (!Number.isFinite(leaseDurationMs) || leaseDurationMs < 1) {
      throw new RangeError("Outbox lease duration must be a positive number.");
    }

    const result = await this.pool.query<OutboxRow>(
      `WITH candidates AS (
         SELECT id
         FROM generation_outbox
         WHERE (
           (status IN ('pending', 'failed') AND available_at <= NOW())
           OR (status = 'processing' AND locked_at < NOW() - ($2 * INTERVAL '1 millisecond'))
         )
         ORDER BY available_at ASC, created_at ASC
         FOR UPDATE SKIP LOCKED
         LIMIT $1
       )
       UPDATE generation_outbox AS outbox
       SET status = 'processing',
           locked_at = NOW(),
           attempts = outbox.attempts + 1
       FROM candidates
       WHERE outbox.id = candidates.id
       RETURNING outbox.id, outbox.payload`,
      [limit, leaseDurationMs],
    );

    return result.rows.map((row) => ({ id: row.id, payload: row.payload }));
  }

  public async markDispatched(id: string): Promise<void> {
    const result = await this.pool.query(
      `UPDATE generation_outbox
       SET status = 'dispatched',
           dispatched_at = NOW(),
           locked_at = NULL,
           last_error = NULL
       WHERE id = $1 AND status = 'processing'`,
      [id],
    );
    if (result.rowCount === 0) {
      throw new Error("Outbox event was not processing when marked dispatched.");
    }
  }

  public async markFailed(
    id: string,
    error: string,
    retryDelayMs: number,
  ): Promise<void> {
    if (!Number.isFinite(retryDelayMs) || retryDelayMs < 0) {
      throw new RangeError("Outbox retry delay must be a non-negative number.");
    }

    const result = await this.pool.query(
      `UPDATE generation_outbox
       SET status = 'failed',
           available_at = NOW() + ($3 * INTERVAL '1 millisecond'),
           locked_at = NULL,
           last_error = $2
       WHERE id = $1 AND status = 'processing'`,
      [id, error.slice(0, 2_000), retryDelayMs],
    );
    if (result.rowCount === 0) {
      throw new Error("Outbox event was not processing when marked failed.");
    }
  }
}
