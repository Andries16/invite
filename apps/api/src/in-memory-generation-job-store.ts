import type {
  CreateGenerationJobInput,
  GenerationIdempotencyRecord,
  GenerationIdempotencyRepository,
  GenerationJobRecord,
  GenerationJobRepository,
} from "@invite/generation-persistence";

export class InMemoryGenerationJobRepository implements GenerationJobRepository {
  private readonly jobs = new Map<string, GenerationJobRecord>();

  public async create(input: CreateGenerationJobInput): Promise<GenerationJobRecord> {
    const job: GenerationJobRecord = {
      id: input.id,
      invitationId: input.invitationId,
      contentHash: input.contentHash,
      status: "queued",
      spec: structuredClone(input.spec),
      createdAt: input.createdAt,
      updatedAt: input.createdAt,
    };
    this.jobs.set(job.id, job);
    return structuredClone(job);
  }

  public async findById(id: string): Promise<GenerationJobRecord | undefined> {
    const job = this.jobs.get(id);
    return job ? structuredClone(job) : undefined;
  }

  public async update(
    id: string,
    patch: Partial<
      Pick<GenerationJobRecord, "status" | "plan" | "error" | "updatedAt">
    >,
  ): Promise<GenerationJobRecord> {
    const current = this.jobs.get(id);
    if (!current) throw new Error("Generation job not found.");

    const next = { ...current, ...structuredClone(patch) };
    this.jobs.set(id, next);
    return structuredClone(next);
  }
}

export class InMemoryGenerationIdempotencyRepository
  implements GenerationIdempotencyRepository
{
  private readonly records = new Map<string, GenerationIdempotencyRecord>();

  public async find(
    invitationId: string,
    idempotencyKey: string,
  ): Promise<GenerationIdempotencyRecord | undefined> {
    const record = this.records.get(this.key(invitationId, idempotencyKey));
    return record ? structuredClone(record) : undefined;
  }

  public async create(
    record: GenerationIdempotencyRecord,
  ): Promise<GenerationIdempotencyRecord> {
    const key = this.key(record.invitationId, record.idempotencyKey);
    if (this.records.has(key)) throw new Error("GENERATION_IDEMPOTENCY_CONFLICT");
    this.records.set(key, structuredClone(record));
    return structuredClone(record);
  }

  private key(invitationId: string, idempotencyKey: string): string {
    return JSON.stringify([invitationId, idempotencyKey]);
  }
}
