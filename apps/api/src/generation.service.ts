import {
  createContentHash,
  GenerationValidationError,
  planGeneration,
  type GenerationPlan,
} from "@invite/invitation-generator";
import type { ExperienceSpec } from "@invite/invitation-schema";
import { Injectable } from "@nestjs/common";
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

interface IdempotencyRecord {
  jobId: string;
  contentHash: string;
}

interface InvitationIdempotencyRecords {
  readonly records: Map<string, IdempotencyRecord>;
}

@Injectable()
export class GenerationService {
  private readonly jobs = new Map<string, GenerationJob>();
  private readonly idempotencyRecords = new Map<string, InvitationIdempotencyRecords>();

  createJob(invitationId: string, spec: ExperienceSpec, idempotencyKey?: string): GenerationJob {
    const contentHash = createContentHash(spec);
    const normalizedIdempotencyKey = idempotencyKey?.trim();

    if (normalizedIdempotencyKey) {
      const invitationRecords = this.getIdempotencyRecords(invitationId);
      const existing = invitationRecords.records.get(normalizedIdempotencyKey);

      if (existing) {
        if (existing.contentHash !== contentHash) {
          throw new GenerationIdempotencyConflictError();
        }

        const existingJob = this.jobs.get(existing.jobId);
        if (existingJob) return existingJob;
        invitationRecords.records.delete(normalizedIdempotencyKey);
      }
    }

    const now = new Date().toISOString();
    const id = randomUUID();

    const job: GenerationJob = {
      id,
      invitationId,
      status: "queued",
      createdAt: now,
      updatedAt: now,
    };

    this.jobs.set(id, job);

    if (normalizedIdempotencyKey) {
      this.getIdempotencyRecords(invitationId).records.set(normalizedIdempotencyKey, {
        jobId: id,
        contentHash,
      });
    }

    queueMicrotask(() => void this.runJob(id, spec));

    return job;
  }

  getJob(id: string): GenerationJob | undefined {
    return this.jobs.get(id);
  }

  private async runJob(id: string, spec: ExperienceSpec): Promise<void> {
    try {
      this.updateJob(id, { status: "running" });
      const plan = planGeneration(spec);
      this.updateJob(id, { status: "succeeded", plan });
    } catch (error) {
      const failed =
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

      this.updateJob(id, { status: "failed", error: failed });
    }
  }

  private getIdempotencyRecords(invitationId: string): InvitationIdempotencyRecords {
    let records = this.idempotencyRecords.get(invitationId);

    if (!records) {
      records = { records: new Map<string, IdempotencyRecord>() };
      this.idempotencyRecords.set(invitationId, records);
    }

    return records;
  }

  private updateJob(id: string, patch: Partial<GenerationJob>): GenerationJob {
    const current = this.jobs.get(id);
    if (!current) throw new Error("Generation job disappeared.");

    const next = { ...current, ...patch, updatedAt: new Date().toISOString() };
    this.jobs.set(id, next);
    return next;
  }
}
