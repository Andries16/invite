import {
  createContentHash,
  GenerationValidationError,
  planGeneration,
} from "@invite/invitation-generator";
import type {
  GenerationJobRecord,
  GenerationJobRepository,
} from "@invite/generation-persistence";
import type { GenerationQueueJob } from "@invite/generation-queue";
import { isExperienceSpec } from "@invite/invitation-runtime";

export class GenerationWorker {
  public constructor(private readonly jobs: GenerationJobRepository) {}

  public async process(job: GenerationQueueJob): Promise<void> {
    const record = await this.jobs.findById(job.jobId);
    if (!record) throw new Error("Generation job not found.");

    if (record.status === "succeeded") return;

    if (
      record.invitationId !== job.invitationId ||
      record.contentHash !== job.contentHash ||
      createContentHash(job.spec) !== job.contentHash
    ) {
      await this.fail(record, {
        code: "GENERATION_FAILED",
        message: "Generation queue payload does not match the persisted job.",
        details: [],
      });
      return;
    }

    if (!isExperienceSpec(job.spec)) {
      await this.fail(record, {
        code: "INVITATION_SPEC_INVALID",
        message: "The invitation specification is invalid.",
        details: [],
      });
      return;
    }

    try {
      await this.jobs.update(job.jobId, {
        status: "running",
        updatedAt: new Date().toISOString(),
      });

      const plan = planGeneration(job.spec);

      await this.jobs.update(job.jobId, {
        status: "succeeded",
        plan,
        updatedAt: new Date().toISOString(),
      });
    } catch (error) {
      await this.fail(
        record,
        error instanceof GenerationValidationError
          ? {
              code: "INVITATION_SPEC_INVALID",
              message: "The invitation specification is invalid.",
              details: error.issues,
            }
          : {
              code: "GENERATION_FAILED",
              message: "Generation planning failed.",
              details: [],
            },
      );
    }
  }

  private async fail(
    record: GenerationJobRecord,
    error: NonNullable<GenerationJobRecord["error"]>,
  ): Promise<void> {
    await this.jobs.update(record.id, {
      status: "failed",
      error,
      updatedAt: new Date().toISOString(),
    });
  }
}
