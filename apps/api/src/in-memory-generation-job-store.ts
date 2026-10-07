import type {
  GenerationIdempotencyRecord,
  GenerationJobRecord,
  GenerationJobStore,
} from "@invite/storage";

export class InMemoryGenerationJobStore implements GenerationJobStore {
  private readonly jobs = new Map<string, GenerationJobRecord>();
  private readonly idempotency = new Map<string, GenerationIdempotencyRecord>();

  public async create(job: GenerationJobRecord): Promise<void> {
    this.jobs.set(job.id, job);
  }

  public async get(jobId: string): Promise<GenerationJobRecord | undefined> {
    return this.jobs.get(jobId);
  }

  public async update(job: GenerationJobRecord): Promise<void> {
    this.jobs.set(job.id, job);
  }

  public async getIdempotency(
    invitationId: string,
    key: string,
  ): Promise<GenerationIdempotencyRecord | undefined> {
    return this.idempotency.get(this.idempotencyKey(invitationId, key));
  }

  public async putIdempotency(record: GenerationIdempotencyRecord): Promise<void> {
    this.idempotency.set(this.idempotencyKey(record.invitationId, record.key), record);
  }

  private idempotencyKey(invitationId: string, key: string): string {
    return invitationId + ":" + key;
  }
}
