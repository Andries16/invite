import { planGeneration } from "@invite/invitation-generator";

export interface GenerationWorkItem {
  invitationId: string;
  spec: unknown;
}

/** Queue adapters belong here; the generator remains transport-agnostic. */
export const executeGenerationWork = (item: GenerationWorkItem) => planGeneration(item.spec);
