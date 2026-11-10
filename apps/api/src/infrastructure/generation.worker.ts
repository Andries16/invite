import {
  createContentHash,
  GenerationValidationError,
  planGeneration,
} from "@invite/invitation-generator";
import type { GenerationJobRepository } from "@invite/generation-persistence";
import type { GenerationQueueJob } from "@invite/generation-queue";

export type GenerationWorkerResult =
  | { outcome: "succeeded"; jobId: string }
  | { outcome: "failed"; jobId: string }
  | { outcome: "ignored"; jobId: string; reason: "missing" | "already-claimed" };

/** Processes at-least-once queue deliveries using a PostgreSQL compare-and-set claim. */
export class GenerationWorker {
  public constructor(private readonly jobs: GenerationJobRepository) {}

  public async process(message: GenerationQueueJob): Promise<GenerationWorkerResult> {
    const stored = await this.jobs.findById(message.jobId);
    if (!stored) return { outcome: "ignored", jobId: message.jobId, reason: "missing" };

    // Never trust a queue payload to replace the durable, immutable request.
    if (
      stored.invitationId !== message.invitationId ||
      stored.contentHash !== message.contentHash ||
      createContentHash(stored.spec) !== stored.contentHash
    ) {
      throw new Error("Generation queue payload does not match the persisted job.");
    }

    const claimed = await this.jobs.claimQueued(message.jobId);
    if (!claimed) {
      return { outcome: "ignored", jobId: message.jobId, reason: "already-claimed" };
    }

    try {
      const plan = planGeneration(claimed.spec);
      await this.jobs.update(claimed.id, {
        status: "succeeded",
        plan,
        error: undefined,
      });
      return { outcome: "succeeded", jobId: claimed.id };
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
      await this.jobs.update(claimed.id, { status: "failed", error: failure });
      return { outcome: "failed", jobId: claimed.id };
    }
  }
}
