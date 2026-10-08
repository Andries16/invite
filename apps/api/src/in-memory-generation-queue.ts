import type {
  GenerationQueue,
  GenerationQueueJob,
} from "@invite/generation-queue";
import { ModuleRef } from "@nestjs/core";
import type { GenerationService } from "./generation.service";

export class InMemoryGenerationQueue implements GenerationQueue {
  public constructor(private readonly moduleRef: ModuleRef) {}

  public async enqueue(job: GenerationQueueJob): Promise<void> {
    queueMicrotask(() => {
      void this.moduleRef
        .get<GenerationService>("GenerationService", { strict: false })
        .executeQueuedJob(job.jobId);
    });
  }
}
