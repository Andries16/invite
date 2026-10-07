import type { ExperienceSpec } from "@invite/invitation-schema";

export const GENERATION_QUEUE_NAME = "invite.generation";

export interface GenerationQueueJob {
  jobId: string;
  invitationId: string;
  contentHash: string;
  spec: ExperienceSpec;
  enqueuedAt: string;
}

export interface GenerationQueue {
  enqueue(job: GenerationQueueJob): Promise<void>;
}
