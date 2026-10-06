import { isExperienceSpec } from "@invite/invitation-runtime";
import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Get,
  Headers,
  HttpCode,
  NotFoundException,
  Param,
  Post,
} from "@nestjs/common";
import { GenerationService, GenerationIdempotencyConflictError } from "./generation.service";

@Controller()
export class GenerationController {
  public constructor(private readonly generationService: GenerationService) {}

  @Post("invitations/:invitationId/generations")
  @HttpCode(202)
  createGeneration(
    @Param("invitationId") invitationId: string,
    @Headers("Idempotency-Key") idempotencyKey: string | undefined,
    @Body() body: { spec?: unknown },
  ): { jobId: string } {
    if (!invitationId.trim()) {
      throw new NotFoundException("Invitation not found.");
    }

    const spec = body?.spec;
    if (!isExperienceSpec(spec) || spec.invitationId !== invitationId) {
      throw new BadRequestException({
        code: "INVITATION_SPEC_MISMATCH",
        message: "The submitted specification does not match the invitation.",
      });
    }

    try {
      const job = this.generationService.createJob(invitationId, spec, idempotencyKey);
      return { jobId: job.id };
    } catch (error) {
      if (error instanceof GenerationIdempotencyConflictError) {
        throw new ConflictException({
          code: "IDEMPOTENCY_KEY_REUSED",
          message: "The idempotency key was already used for different generation input.",
        });
      }

      throw error;
    }
  }

  @Get("generation-jobs/:jobId")
  getGenerationJob(@Param("jobId") jobId: string) {
    const job = this.generationService.getJob(jobId);
    if (!job) throw new NotFoundException("Generation job not found.");
    return job;
  }
}
