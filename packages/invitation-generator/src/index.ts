import {
  isExperienceSpec,
  validateExperienceSpec,
} from "@invite/invitation-runtime";
import type { ExperienceSpec } from "@invite/invitation-schema";

export const GENERATOR_VERSION = "1";

export interface ArtifactManifest {
  artifactId: string;
  experienceId: string;
  schemaVersion: string;
  generatorVersion: string;
  entrypoint: "index.html";
  sceneIds: string[];
  mediaIds: string[];
}

export interface GenerationPlan {
  manifest: ArtifactManifest;
  normalizedSpec: ExperienceSpec;
}

export class GenerationValidationError extends Error {
  public readonly issues: ReturnType<typeof validateExperienceSpec>["issues"];

  public constructor(issues: ReturnType<typeof validateExperienceSpec>["issues"]) {
    super("ExperienceSpec cannot be generated.");
    this.name = "GenerationValidationError";
    this.issues = issues;
  }
}

/**
 * Builds the deterministic input to a production renderer.
 *
 * Generation intentionally does not perform AI work, mutate persistent state,
 * or publish an artifact. The same validated spec produces the same plan.
 */
export const planGeneration = (spec: unknown): GenerationPlan => {
  const validation = validateExperienceSpec(spec);

  if (!validation.valid || !isExperienceSpec(spec)) {
    throw new GenerationValidationError(validation.issues);
  }

  const sceneIds = [...spec.scenes]
    .sort((left, right) => left.order - right.order)
    .map((scene) => scene.id);

  const mediaIds = [...new Set(spec.scenes.flatMap((scene) => scene.mediaIds))].sort();

  return {
    manifest: {
      artifactId: `${spec.id}-${spec.schemaVersion}-g${GENERATOR_VERSION}`,
      experienceId: spec.id,
      schemaVersion: spec.schemaVersion,
      generatorVersion: GENERATOR_VERSION,
      entrypoint: "index.html",
      sceneIds,
      mediaIds,
    },
    normalizedSpec: spec,
  };
};
