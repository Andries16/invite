import { createHash } from "node:crypto";
import { isExperienceSpec, validateExperienceSpec } from "@invite/invitation-runtime";
import type { ExperienceSpec } from "@invite/invitation-schema";

export const GENERATOR_VERSION = "1";
export const SUPPORTED_SCHEMA_VERSIONS = ["1"] as const;

export interface ArtifactManifest {
  artifactId: string;
  experienceId: string;
  schemaVersion: string;
  generatorVersion: string;
  contentHash: string;
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

const compareCanonicalKeys = (left: string, right: string): number => {
  const leftLength = left.length;
  const rightLength = right.length;
  const length = Math.min(leftLength, rightLength);

  for (let index = 0; index < length; index += 1) {
    const leftCodeUnit = left.charCodeAt(index);
    const rightCodeUnit = right.charCodeAt(index);

    if (leftCodeUnit < rightCodeUnit) return -1;
    if (leftCodeUnit > rightCodeUnit) return 1;
  }

  if (leftLength < rightLength) return -1;
  if (leftLength > rightLength) return 1;
  return 0;
};

const canonicalize = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map(canonicalize);
  }

  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([left], [right]) => compareCanonicalKeys(left, right))
        .map(([key, nestedValue]) => [key, canonicalize(nestedValue)]),
    );
  }

  return value;
};

export const createContentHash = (spec: ExperienceSpec): string =>
  createHash("sha256").update(JSON.stringify(canonicalize(spec))).digest("hex");

export const planGeneration = (spec: unknown): GenerationPlan => {
  const validation = validateExperienceSpec(spec);

  if (!validation.valid || !isExperienceSpec(spec)) {
    throw new GenerationValidationError(validation.issues);
  }

  if (
    !SUPPORTED_SCHEMA_VERSIONS.includes(
      spec.schemaVersion as (typeof SUPPORTED_SCHEMA_VERSIONS)[number],
    )
  ) {
    throw new GenerationValidationError([
      {
        path: "schemaVersion",
        message: `Unsupported schema version: ${spec.schemaVersion}`,
      },
    ]);
  }

  const sceneIds = [...spec.scenes]
    .sort((left, right) => left.order - right.order)
    .map((scene) => scene.id);

  const mediaIds = [...new Set(spec.scenes.flatMap((scene) => scene.mediaIds))].sort();
  const contentHash = createContentHash(spec);

  return {
    manifest: {
      artifactId: `${spec.id}-${spec.schemaVersion}-g${GENERATOR_VERSION}-${contentHash.slice(0, 16)}`,
      experienceId: spec.id,
      schemaVersion: spec.schemaVersion,
      generatorVersion: GENERATOR_VERSION,
      contentHash,
      entrypoint: "index.html",
      sceneIds,
      mediaIds,
    },
    normalizedSpec: spec,
  };
};
