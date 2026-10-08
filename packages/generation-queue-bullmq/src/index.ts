import {
  GENERATION_QUEUE_NAME,
  type GenerationQueue,
  type GenerationQueueJob,
} from "@invite/generation-queue";

export interface BullMqQueueLike {
  add(
    name: string,
    data: GenerationQueueJob,
    options?: {
      jobId?: string;
      attempts?: number;
      backoff?: {
        type: "exponential";
        delay: number;
      };
      removeOnComplete?: boolean | number;
      removeOnFail?: boolean | number;
    },
  ): Promise<unknown>;
}

export interface BullMqGenerationQueueOptions {
  attempts?: number;
  backoffDelayMs?: number;
  removeOnComplete?: boolean | number;
  removeOnFail?: boolean | number;
}

export interface BullMqJobLike {
  data: GenerationQueueJob;
}

export type BullMqGenerationJobHandler = (
  job: GenerationQueueJob,
) => Promise<void>;

export interface BullMqWorkerLike {
  close(): Promise<void>;
}

export interface BullMqWorkerFactory {
  create(
    name: string,
    handler: (job: BullMqJobLike) => Promise<void>,
    options?: {
      concurrency?: number;
    },
  ): BullMqWorkerLike;
}

export class BullMqGenerationConsumer {
  public readonly worker: BullMqWorkerLike;

  public constructor(
    factory: BullMqWorkerFactory,
    handler: BullMqGenerationJobHandler,
    options: { concurrency?: number } = {},
  ) {
    this.worker = factory.create(
      GENERATION_QUEUE_NAME,
      async (job) => handler(job.data),
      options,
    );
  }
}

export class BullMqGenerationQueue implements GenerationQueue {
  public constructor(
    private readonly queue: BullMqQueueLike,
    private readonly options: BullMqGenerationQueueOptions = {},
  ) {}

  public async enqueue(job: GenerationQueueJob): Promise<void> {
    await this.queue.add(GENERATION_QUEUE_NAME, job, {
      jobId: job.jobId,
      attempts: this.options.attempts ?? 5,
      backoff: {
        type: "exponential",
        delay: this.options.backoffDelayMs ?? 1_000,
      },
      removeOnComplete: this.options.removeOnComplete ?? 100,
      removeOnFail: this.options.removeOnFail ?? 1_000,
    });
  }
}
