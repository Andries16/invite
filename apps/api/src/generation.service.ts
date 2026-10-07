import { createContentHash, GenerationValidationError, planGeneration, type GenerationPlan } from "@invite/invitation-generator";
import type { ExperienceSpec } from "@invite/invitation-schema";
import type { GenerationJobStore } from "@invite/storage";
import { Inject, Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";

export type GenerationJobStatus = "queued" | "running" | "failed" | "succeeded";

export interface GenerationJob {
  id: string;
  invitationId: string;
  status: GenerationJobStatus;
  createdAt: string;
  updatedAt: string;
  plan?: GenerationPlan;
  error?: {
    code: "INVITATION_SPEC_INVALID" | "GENERATION_FAILED";
    message: string;
    details: unknown[];
  };
}

export class GenerationIdempotencyConflictError extends Error {
  public constructor() {
    super("Generation idempotency key was already used for different input.");
    this.name = "GenerationIdempotencyConflictError";
  }
}

export const GENERATION_JOB_STORE = Symbol("GENERATION_JOB_STORE");

@Injectable()
export class GenerationService {
  public constructor(
    @Inject(GENERATION_JOB_STORE)
    private readonly store: GenerationJobStore,
  ) {}

  async createJob(invitationId: string, spec: ExperienceSpec, idempotencyKey?: string): Promise<GenerationJob> {
    const contentHash = createContentHash(spec);
    const key = idempotencyKey?.trim();

    if (key) {
      const existing = await this.store.getIdempotency(invitationId, key);
      if (existing) {
        if (existing.contentHash !== contentHash) throw new GenerationIdempotencyConflictError();
        const existingJob = await this.store.get(existing.jobId);
        if (existingJob) return existingJob as GenerationJob;
      }
    }

    const now = new Date().toISOString();
    const job: GenerationJob = { id: randomUUID(), invitationId, status: "queued", createdAt: now, updatedAt: now };
    await this.store.create(job);

    if (key) {
      await this.store.putIdempotency({ invitationId, key, jobId: job.id, contentHash });
    }

    queueMicrotask(() => void this.runJob(job.id, spec));
    return job;
  }

  async getJob(id: string): Promise<GenerationJob | undefined> {
    return this.store.get(id) as Promise<GenerationJob | undefined>;
  }

  private async runJob(id: string, spec: ExperienceSpec): Promise<void> {
    try {
      await this.updateJob(id, { status: "running" });
      const plan = planGeneration(spec);
      await this.updateJob(id, { status: "succeeded", plan });
    } catch (error) {
      const failed = error instanceof GenerationValidationError
        ? { code: "INVITATION_SPEC_INVALID" as const, message: "The invitation specification is invalid.", details: error.issues }
        : { code: "GENERATION_FAILED" as const, message: "Generation planning failed.", details: [] };
      await this.updateJob(id, { status: "failed", error: failed });
    }
  }

  private async updateJob(id: string, patch: Partial<GenerationJob>): Promise<GenerationJob> {
    const current = await this.store.get(id);
    if (!current) throw new Error("Generation job disappeared.");
    const next = { ...current, ...patch, updatedAt: new Date().toISOString() };
    await this.store.update(next);
    return next as GenerationJob;
  }
}
