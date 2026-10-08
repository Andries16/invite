import {
  createContentHash,
  GenerationValidationError,
  type GenerationPlan,
  planGeneration,
} from "@invite/invitation-generator";
import type {
  GenerationIdempotencyRepository,
  GenerationJobRecord,
  GenerationJobRepository,
} from "@invite/generation-persistence";
import type { GenerationQueue } from "@invite/generation-queue";
import type { ExperienceSpec } from "@invite/invitation-schema";
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
  error?: GenerationJobRecord["error"];
}

export class GenerationIdempotencyConflictError extends Error {
  public constructor() {
    super("Generation idempotency key was already used for different input.");
    this.name = "GenerationIdempotencyConflictError";
  }
}

export const GENERATION_JOB_REPOSITORY = Symbol("GENERATION_JOB_REPOSITORY");
export const GENERATION_IDEMPOTENCY_REPOSITORY = Symbol(
  "GENERATION_IDEMPOTENCY_REPOSITORY",
);
export const GENERATION_QUEUE = Symbol("GENERATION_QUEUE");

@Injectable()
export class GenerationService {
  public constructor(
    @Inject(GENERATION_JOB_REPOSITORY)
    private readonly jobs: GenerationJobRepository,
    @Inject(GENERATION_IDEMPOTENCY_REPOSITORY)
    private readonly idempotency: GenerationIdempotencyRepository,
    @Inject(GENERATION_QUEUE)
    private readonly queue: GenerationQueue,
  ) {}

  public async createJob(
    invitationId: string,
    spec: ExperienceSpec,
    idempotencyKey?: string,
  ): Promise<GenerationJob> {
    const contentHash = createContentHash(spec);
    const normalizedKey = idempotencyKey?.trim();

    if (normalizedKey) {
      const existing = await this.idempotency.find(invitationId, normalizedKey);
      if (existing) {
        if (existing.contentHash !== contentHash) {
          throw new GenerationIdempotencyConflictError();
        }

        const existingJob = await this.jobs.findById(existing.jobId);
        if (existingJob) return this.toPublicJob(existingJob);
      }
    }

    const now = new Date().toISOString();
    const jobId = randomUUID();
    const record = await this.jobs.create({
      id: jobId,
      invitationId,
      contentHash,
      spec,
      createdAt: now,
    });

    if (normalizedKey) {
      try {
        await this.idempotency.create({
          invitationId,
          idempotencyKey: normalizedKey,
          contentHash,
          jobId,
          createdAt: now,
        });
      } catch (error) {
        const existing = await this.idempotency.find(invitationId, normalizedKey);
        if (existing?.contentHash !== contentHash) {
          throw new GenerationIdempotencyConflictError();
        }

        const existingJob = existing
          ? await this.jobs.findById(existing.jobId)
          : undefined;
        if (existingJob) return this.toPublicJob(existingJob);
        throw error;
      }
    }

    await this.queue.enqueue({
      jobId: record.id,
      invitationId: record.invitationId,
      contentHash: record.contentHash,
      spec: record.spec,
      enqueuedAt: now,
    });

    return this.toPublicJob(record);
  }

  public async getJob(id: string): Promise<GenerationJob | undefined> {
    const job = await this.jobs.findById(id);
    return job ? this.toPublicJob(job) : undefined;
  }

  public async executeQueuedJob(jobId: string): Promise<void> {
    const record = await this.jobs.findById(jobId);
    if (!record) throw new Error("Generation job not found.");

    try {
      await this.jobs.update(jobId, {
        status: "running",
        updatedAt: new Date().toISOString(),
      });

      const plan = planGeneration(record.spec);
      await this.jobs.update(jobId, {
        status: "succeeded",
        plan,
        updatedAt: new Date().toISOString(),
      });
    } catch (error) {
      const failure =
        error instanceof GenerationValidationError
          ? {
              code: "INVITATION_SPEC_INVALID" as const,
              message: "The invitation specification is invalid.",
              details: error.issues,
            }
          : {
              code: "GENERATION_FAILED" as const,
              message: "Generation planning failed.",
              details: [],
            };

      await this.jobs.update(jobId, {
        status: "failed",
        error: failure,
        updatedAt: new Date().toISOString(),
      });
    }
  }

  private toPublicJob(record: GenerationJobRecord): GenerationJob {
    return {
      id: record.id,
      invitationId: record.invitationId,
      status: record.status,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      ...(record.plan === undefined ? {} : { plan: record.plan }),
      ...(record.error === undefined ? {} : { error: record.error }),
    };
  }
}
