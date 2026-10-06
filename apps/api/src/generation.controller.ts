import {
  Body,
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
} from "@nestjs/common";
import { GenerationService } from "./generation.service";

@Controller()
export class GenerationController {
  public constructor(private readonly generationService: GenerationService) {}

  @Post("invitations/:invitationId/generations")
  @HttpCode(202)
  createGeneration(
    @Param("invitationId") invitationId: string,
    @Body() body: { spec?: unknown },
  ): { jobId: string } {
    if (!invitationId.trim()) throw new NotFoundException("Invitation not found.");

    const job = this.generationService.createJob(invitationId, body?.spec);
    return { jobId: job.id };
  }

  @Get("generation-jobs/:jobId")
  getGenerationJob(@Param("jobId") jobId: string) {
    const job = this.generationService.getJob(jobId);
    if (!job) throw new NotFoundException("Generation job not found.");
    return job;
  }
}
