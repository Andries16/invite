import {
  GenerationValidationError,
  planGeneration,
  type GenerationPlan,
} from "@invite/invitation-generator";
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

@Injectable()
export class GenerationService {
  private readonly jobs = new Map<string, GenerationJob>();

  createJob(invitationId: string, spec: unknown): GenerationJob {
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
    queueMicrotask(() => void this.runJob(id, spec));

    return job;
  }

  getJob(id: string): GenerationJob | undefined {
    return this.jobs.get(id);
  }

  private async runJob(id: string, spec: unknown): Promise<void> {
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

  private updateJob(id: string, patch: Partial<GenerationJob>): GenerationJob {
    const current = this.jobs.get(id);
    if (!current) throw new Error("Generation job disappeared.");

    const next = { ...current, ...patch, updatedAt: new Date().toISOString() };
    this.jobs.set(id, next);
    return next;
  }
}
