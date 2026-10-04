import type { ExperienceSpec } from "@invite/invitation-schema";

export interface GeneratedArtifact { id: string; experienceId: string; version: number; entrypoint: string; }
export const planGeneration = (spec: ExperienceSpec): GeneratedArtifact => ({ id: `${spec.id}-${spec.schemaVersion}`, experienceId: spec.id, version: 1, entrypoint: "index.html" });
