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
  ) {
    if (!invitationId.trim()) throw new NotFoundException("Invitation not found.");
    return this.generationService.createJob(invitationId, body?.spec);
  }

  @Get("generation-jobs/:jobId")
  getGenerationJob(@Param("jobId") jobId: string) {
    const job = this.generationService.getJob(jobId);
    if (!job) throw new NotFoundException("Generation job not found.");
    return job;
  }
}
