import { planGeneration } from "@invite/invitation-generator";

export interface GenerationWorkItem {
  invitationId: string;
  spec: unknown;
}

export const executeGenerationWork = (item: GenerationWorkItem) => planGeneration(item.spec);
