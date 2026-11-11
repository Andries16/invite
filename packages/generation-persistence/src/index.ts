import type { GenerationPlan } from "@invite/invitation-generator";
import type { ExperienceSpec } from "@invite/invitation-schema";

export type GenerationJobStatus = "queued" | "running" | "failed" | "succeeded";

export interface GenerationJobRecord {
  id: string;
  invitationId: string;
  contentHash: string;
  status: GenerationJobStatus;
  spec: ExperienceSpec;
  plan?: GenerationPlan;
  error?: {
    code: "INVITATION_SPEC_INVALID" | "GENERATION_FAILED";
    message: string;
    details: unknown[];
  };
  createdAt: string;
  updatedAt: string;
}

export interface GenerationIdempotencyRecord {
  invitationId: string;
  idempotencyKey: string;
  contentHash: string;
  jobId: string;
  createdAt: string;
}

export interface CreateGenerationJobInput {
  id: string;
  invitationId: string;
  contentHash: string;
  spec: ExperienceSpec;
  createdAt: string;
}

export interface GenerationJobRepository {
  create(input: CreateGenerationJobInput): Promise<GenerationJobRecord>;
  findById(id: string): Promise<GenerationJobRecord | undefined>;
  /** Atomically transitions queued -> running; returns undefined for duplicate or stale deliveries. */
  claimQueued(id: string): Promise<GenerationJobRecord | undefined>;
  update(
    id: string,
    patch: Partial<
      Pick<GenerationJobRecord, "status" | "plan" | "error" | "updatedAt">
    >,
  ): Promise<GenerationJobRecord>;
}

/** Job repository that commits the job, idempotency key, and outbox event atomically. */
export interface AtomicGenerationJobRepository extends GenerationJobRepository {
  createIdempotent(input: CreateGenerationJobInput, idempotency: GenerationIdempotencyRecord): Promise<GenerationJobRecord>;
}

export interface GenerationIdempotencyRepository {
  find(
    invitationId: string,
    idempotencyKey: string,
  ): Promise<GenerationIdempotencyRecord | undefined>;

  create(
    record: GenerationIdempotencyRecord,
  ): Promise<GenerationIdempotencyRecord>;
}
