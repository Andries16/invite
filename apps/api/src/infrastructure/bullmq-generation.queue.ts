import {
  GENERATION_QUEUE_NAME,
  type GenerationQueue,
  type GenerationQueueJob,
} from "@invite/generation-queue";

export interface BullMqJobOptions {
  jobId: string;
  attempts: number;
  backoff: { type: "exponential"; delay: number };
  removeOnComplete: boolean;
  removeOnFail: boolean;
}

/** Structural subset implemented by BullMQ's Queue, allowing dependency injection. */
export interface BullMqQueueLike {
  add(
    name: string,
    data: GenerationQueueJob,
    options: BullMqJobOptions,
  ): Promise<unknown>;
}

export interface BullMqGenerationQueueOptions {
  attempts?: number;
  backoffDelayMs?: number;
}

/**
 * BullMQ adapter: stable job IDs make repeated enqueue attempts idempotent.
 * The API persists the durable job before calling enqueue.
 */
export class BullMqGenerationQueue implements GenerationQueue {
  private readonly attempts: number;
  private readonly backoffDelayMs: number;

  public constructor(
    private readonly queue: BullMqQueueLike,
    options: BullMqGenerationQueueOptions = {},
  ) {
    this.attempts = options.attempts ?? 3;
    this.backoffDelayMs = options.backoffDelayMs ?? 1_000;

    if (!Number.isInteger(this.attempts) || this.attempts < 1) {
      throw new RangeError("BullMQ attempts must be a positive integer.");
    }
    if (!Number.isFinite(this.backoffDelayMs) || this.backoffDelayMs < 0) {
      throw new RangeError("BullMQ backoff delay must be a non-negative number.");
    }
  }

  public async enqueue(job: GenerationQueueJob): Promise<void> {
    await this.queue.add(GENERATION_QUEUE_NAME, job, {
      jobId: job.jobId,
      attempts: this.attempts,
      backoff: { type: "exponential", delay: this.backoffDelayMs },
      removeOnComplete: false,
      removeOnFail: false,
    });
  }
}
