import { Module } from "@nestjs/common";
import { GenerationController } from "./generation.controller";
import { GenerationService, GENERATION_JOB_STORE } from "./generation.service";
import { InMemoryGenerationJobStore } from "./in-memory-generation-job-store";

@Module({
  controllers: [GenerationController],
  providers: [
    GenerationService,
    InMemoryGenerationJobStore,
    {
      provide: GENERATION_JOB_STORE,
      useExisting: InMemoryGenerationJobStore,
    },
  ],
})
export class AppModule {}
