import { createContentHash } from "@invite/invitation-generator";
import type { AtomicGenerationJobRepository, GenerationIdempotencyRepository, GenerationJobRecord } from "@invite/generation-persistence";
import type { ExperienceSpec } from "@invite/invitation-schema";
import { Inject, Injectable, Optional, ServiceUnavailableException } from "@nestjs/common";
import { randomUUID } from "node:crypto";

export const GENERATION_JOB_REPOSITORY = Symbol.for("invite.generation.job-repository");
export const GENERATION_IDEMPOTENCY_REPOSITORY = Symbol.for("invite.generation.idempotency-repository");

export class GenerationIdempotencyConflictError extends Error {
  public constructor() {
    super("Generation idempotency key was already used for different input.");
    this.name = "GenerationIdempotencyConflictError";
  }
}

const isUniqueConstraintViolation = (error: unknown): boolean =>
  typeof error === "object" && error !== null && "code" in error && error.code === "23505";

@Injectable()
export class GenerationService {
  public constructor(
    @Optional() @Inject(GENERATION_JOB_REPOSITORY) private readonly jobs?: AtomicGenerationJobRepository,
    @Optional() @Inject(GENERATION_IDEMPOTENCY_REPOSITORY) private readonly idempotency?: GenerationIdempotencyRepository,
  ) {}

  public async createJob(invitationId: string, spec: ExperienceSpec, idempotencyKey?: string): Promise<GenerationJobRecord> {
    const jobs = this.requireJobs();
    const idempotency = this.requireIdempotency();
    const contentHash = createContentHash(spec);
    const key = idempotencyKey?.trim();
    const now = new Date().toISOString();
    const input = { id: randomUUID(), invitationId, contentHash, spec, createdAt: now };
    if (!key) return jobs.create(input);

    const existing = await idempotency.find(invitationId, key);
    if (existing) return this.resolveExisting(existing, contentHash);

    try {
      return await jobs.createIdempotent(input, {
        invitationId, idempotencyKey: key, contentHash, jobId: input.id, createdAt: now,
      });
    } catch (error) {
      // The unique key arbitrates concurrent requests; load the winner after rollback.
      if (!isUniqueConstraintViolation(error)) throw error;
      const winner = await idempotency.find(invitationId, key);
      if (!winner) throw error;
      return this.resolveExisting(winner, contentHash);
    }
  }

  public async getJob(id: string): Promise<GenerationJobRecord | undefined> {
    return this.requireJobs().findById(id);
  }

  private async resolveExisting(
    existing: { contentHash: string; jobId: string },
    requestedHash: string,
  ): Promise<GenerationJobRecord> {
    if (existing.contentHash !== requestedHash) throw new GenerationIdempotencyConflictError();
    const job = await this.requireJobs().findById(existing.jobId);
    if (!job) throw new Error("Generation idempotency record references a missing job.");
    return job;
  }

  private requireJobs(): AtomicGenerationJobRepository {
    if (!this.jobs) throw new ServiceUnavailableException({
      code: "GENERATION_PERSISTENCE_UNAVAILABLE",
      message: "Durable generation persistence is not configured.",
    });
    return this.jobs;
  }

  private requireIdempotency(): GenerationIdempotencyRepository {
    if (!this.idempotency) throw new ServiceUnavailableException({
      code: "GENERATION_PERSISTENCE_UNAVAILABLE",
      message: "Durable generation persistence is not configured.",
    });
    return this.idempotency;
  }
}
