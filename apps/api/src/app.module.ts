import { Module } from "@nestjs/common";
import { InMemoryGenerationIdempotencyRepository, InMemoryGenerationJobRepository } from "./in-memory-generation-job-store";
import { InMemoryGenerationQueue } from "./in-memory-generation-queue";
import {
  GENERATION_IDEMPOTENCY_REPOSITORY,
  GENERATION_JOB_REPOSITORY,
  GENERATION_QUEUE,
  GenerationService,
} from "./generation.service";
import { GenerationController } from "./generation.controller";

@Module({
  controllers: [GenerationController],
  providers: [
    GenerationService,
    InMemoryGenerationJobRepository,
    InMemoryGenerationIdempotencyRepository,
    InMemoryGenerationQueue,
    {
      provide: GENERATION_JOB_REPOSITORY,
      useExisting: InMemoryGenerationJobRepository,
    },
    {
      provide: GENERATION_IDEMPOTENCY_REPOSITORY,
      useExisting: InMemoryGenerationIdempotencyRepository,
    },
    {
      provide: GENERATION_QUEUE,
      useExisting: InMemoryGenerationQueue,
    },
  ],
})
export class AppModule {}
