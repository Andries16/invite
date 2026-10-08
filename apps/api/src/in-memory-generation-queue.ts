import type {
  GenerationQueue,
  GenerationQueueJob,
} from "@invite/generation-queue";

export type GenerationQueueHandler = (job: GenerationQueueJob) => Promise<void>;

export class InMemoryGenerationQueue implements GenerationQueue {
  public constructor(private readonly handler: GenerationQueueHandler) {}

  public async enqueue(job: GenerationQueueJob): Promise<void> {
    queueMicrotask(() => {
      void this.handler(job);
    });
  }
}
