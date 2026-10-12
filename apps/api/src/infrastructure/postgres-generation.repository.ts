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
    const result = await this.pool.query<JobRow>(
      `INSERT INTO generation_jobs
        (id, invitation_id, content_hash, status, spec, created_at, updated_at)
       VALUES ($1, $2, $3, 'queued', $4::jsonb, $5::timestamptz, $5::timestamptz)
       RETURNING ${jobColumns}`,
      [input.id, input.invitationId, input.contentHash, JSON.stringify(input.spec), input.createdAt],
    );
    const row = result.rows[0];
    if (!row) throw new Error("PostgreSQL did not return the created generation job.");
    return toJobRecord(row);
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
    if (!row) throw new Error("Generation job not found.");
    return toJobRecord(row);
  }

  /** Atomically persists a keyed request so no orphan idempotency record remains. */
  public async createIdempotent(
    input: CreateGenerationJobInput,
    idempotency: GenerationIdempotencyRecord,
  ): Promise<GenerationJobRecord> {
    if (
      input.id !== idempotency.jobId ||
      input.invitationId !== idempotency.invitationId ||
      input.contentHash !== idempotency.contentHash
    ) {
      throw new Error("Generation job and idempotency record must describe the same request.");
    }

    const connection = await this.pool.connect();
    try {
      await connection.query("BEGIN");
      const jobResult = await connection.query<JobRow>(
        `INSERT INTO generation_jobs
          (id, invitation_id, content_hash, status, spec, created_at, updated_at)
         VALUES ($1, $2, $3, 'queued', $4::jsonb, $5::timestamptz, $5::timestamptz)
         RETURNING ${jobColumns}`,
        [input.id, input.invitationId, input.contentHash, JSON.stringify(input.spec), input.createdAt],
      );
      await connection.query(
        `INSERT INTO generation_idempotency_keys
          (invitation_id, idempotency_key, content_hash, job_id, created_at)
         VALUES ($1, $2, $3, $4, $5::timestamptz)`,
        [idempotency.invitationId, idempotency.idempotencyKey, idempotency.contentHash, idempotency.jobId, idempotency.createdAt],
      );
      await connection.query("COMMIT");
      const row = jobResult.rows[0];
      if (!row) throw new Error("PostgreSQL did not return the created generation job.");
      return toJobRecord(row);
    } catch (error) {
      await connection.query("ROLLBACK");
      throw error;
    } finally {
      connection.release();
    }
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
