import type {
  CreateGenerationJobInput,
  GenerationIdempotencyRecord,
  GenerationIdempotencyRepository,
  GenerationJobRecord,
  GenerationJobRepository,
} from "@invite/generation-persistence";

export interface PostgresQueryResult<TRow> {
  rows: TRow[];
  rowCount?: number;
}

export interface PostgresClient {
  query<TRow>(
    sql: string,
    parameters?: readonly unknown[],
  ): Promise<PostgresQueryResult<TRow>>;
}

interface GenerationJobRow {
  id: string;
  invitation_id: string;
  content_hash: string;
  status: GenerationJobRecord["status"];
  spec: GenerationJobRecord["spec"];
  plan: GenerationJobRecord["plan"] | null;
  error: GenerationJobRecord["error"] | null;
  created_at: string;
  updated_at: string;
}

interface GenerationIdempotencyRow {
  invitation_id: string;
  idempotency_key: string;
  content_hash: string;
  job_id: string;
  created_at: string;
}

const toJob = (row: GenerationJobRow): GenerationJobRecord => ({
  id: row.id,
  invitationId: row.invitation_id,
  contentHash: row.content_hash,
  status: row.status,
  spec: row.spec,
  ...(row.plan === null ? {} : { plan: row.plan }),
  ...(row.error === null ? {} : { error: row.error }),
  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

const toIdempotency = (
  row: GenerationIdempotencyRow,
): GenerationIdempotencyRecord => ({
  invitationId: row.invitation_id,
  idempotencyKey: row.idempotency_key,
  contentHash: row.content_hash,
  jobId: row.job_id,
  createdAt: row.created_at,
});

export class PostgresGenerationJobRepository implements GenerationJobRepository {
  public constructor(private readonly client: PostgresClient) {}

  public async create(
    input: CreateGenerationJobInput,
  ): Promise<GenerationJobRecord> {
    const result = await this.client.query<GenerationJobRow>(
      `INSERT INTO generation_jobs (
        id, invitation_id, content_hash, status, spec, created_at, updated_at
      ) VALUES ($1, $2, $3, 'queued', $4::jsonb, $5, $5)
      RETURNING id, invitation_id, content_hash, status, spec, plan, error, created_at, updated_at`,
      [
        input.id,
        input.invitationId,
        input.contentHash,
        JSON.stringify(input.spec),
        input.createdAt,
      ],
    );

    const row = result.rows[0];
    if (!row) {
      throw new Error("PostgreSQL did not return the created generation job.");
    }
    return toJob(row);
  }

  public async findById(id: string): Promise<GenerationJobRecord | undefined> {
    const result = await this.client.query<GenerationJobRow>(
      `SELECT id, invitation_id, content_hash, status, spec, plan, error, created_at, updated_at
       FROM generation_jobs
       WHERE id = $1`,
      [id],
    );

    const row = result.rows[0];
    return row ? toJob(row) : undefined;
  }

  public async update(
    id: string,
    patch: Partial<
      Pick<GenerationJobRecord, "status" | "plan" | "error" | "updatedAt">
    >,
  ): Promise<GenerationJobRecord> {
    const assignments: string[] = [];
    const parameters: unknown[] = [];
    let parameterIndex = 1;

    if (patch.status !== undefined) {
      assignments.push(`status = $${parameterIndex++}`);
      parameters.push(patch.status);
    }
    if (patch.plan !== undefined) {
      assignments.push(`plan = $${parameterIndex++}::jsonb`);
      parameters.push(JSON.stringify(patch.plan));
    }
    if (patch.error !== undefined) {
      assignments.push(`error = $${parameterIndex++}::jsonb`);
      parameters.push(JSON.stringify(patch.error));
    }
    if (patch.updatedAt !== undefined) {
      assignments.push(`updated_at = $${parameterIndex++}`);
      parameters.push(patch.updatedAt);
    }

    if (assignments.length === 0) {
      const current = await this.findById(id);
      if (!current) throw new Error("Generation job not found.");
      return current;
    }

    parameters.push(id);
    const result = await this.client.query<GenerationJobRow>(
      `UPDATE generation_jobs
       SET ${assignments.join(", ")}
       WHERE id = $${parameterIndex}
       RETURNING id, invitation_id, content_hash, status, spec, plan, error, created_at, updated_at`,
      parameters,
    );

    const row = result.rows[0];
    if (!row) throw new Error("Generation job not found.");
    return toJob(row);
  }
}

export class PostgresGenerationIdempotencyRepository
  implements GenerationIdempotencyRepository
{
  public constructor(private readonly client: PostgresClient) {}

  public async find(
    invitationId: string,
    idempotencyKey: string,
  ): Promise<GenerationIdempotencyRecord | undefined> {
    const result = await this.client.query<GenerationIdempotencyRow>(
      `SELECT invitation_id, idempotency_key, content_hash, job_id, created_at
       FROM generation_idempotency
       WHERE invitation_id = $1 AND idempotency_key = $2`,
      [invitationId, idempotencyKey],
    );

    const row = result.rows[0];
    return row ? toIdempotency(row) : undefined;
  }

  public async create(
    record: GenerationIdempotencyRecord,
  ): Promise<GenerationIdempotencyRecord> {
    const result = await this.client.query<GenerationIdempotencyRow>(
      `INSERT INTO generation_idempotency (
        invitation_id, idempotency_key, content_hash, job_id, created_at
      ) VALUES ($1, $2, $3, $4, $5)
      RETURNING invitation_id, idempotency_key, content_hash, job_id, created_at`,
      [
        record.invitationId,
        record.idempotencyKey,
        record.contentHash,
        record.jobId,
        record.createdAt,
      ],
    );

    const row = result.rows[0];
    if (!row) {
      throw new Error("PostgreSQL did not return the idempotency record.");
    }
    return toIdempotency(row);
  }
}
