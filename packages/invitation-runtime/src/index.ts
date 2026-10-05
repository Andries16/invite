import type { ExperienceSpec, SceneSpec, SceneTrigger } from "@invite/invitation-schema";

export type RuntimeMode = "preview" | "guest" | "production";
export type SceneStatus = "idle" | "active" | "completed";

export interface RuntimeState {
  mode: RuntimeMode;
  currentSceneId: SceneSpec["id"] | null;
  sceneStatus: SceneStatus;
}

export interface RuntimeValidationIssue {
  path: string;
  message: string;
}

export interface RuntimeValidationResult {
  valid: boolean;
  issues: RuntimeValidationIssue[];
}

export const createInitialRuntimeState = (mode: RuntimeMode): RuntimeState => ({
  mode,
  currentSceneId: null,
  sceneStatus: "idle",
});

export const getOrderedScenes = (spec: ExperienceSpec): SceneSpec[] =>
  [...spec.scenes].sort((left, right) => left.order - right.order);

export const getSceneById = (
  spec: ExperienceSpec,
  sceneId: SceneSpec["id"],
): SceneSpec | undefined => spec.scenes.find((scene) => scene.id === sceneId);

export const getInitialScene = (spec: ExperienceSpec): SceneSpec | undefined =>
  getOrderedScenes(spec)[0];

export const getNextScene = (
  spec: ExperienceSpec,
  sceneId: SceneSpec["id"],
): SceneSpec | undefined => {
  const scenes = getOrderedScenes(spec);
  const index = scenes.findIndex((scene) => scene.id === sceneId);
  return index >= 0 ? scenes[index + 1] : undefined;
};

export const isAutomaticTrigger = (trigger: SceneTrigger): boolean =>
  trigger.type === "load" || trigger.type === "after";

export const validateExperienceSpec = (spec: ExperienceSpec): RuntimeValidationResult => {
  const issues: RuntimeValidationIssue[] = [];
  const sceneIds = new Set<string>();

  if (!spec.schemaVersion) {
    issues.push({ path: "schemaVersion", message: "Schema version is required." });
  }

  if (!spec.id) {
    issues.push({ path: "id", message: "Experience id is required." });
  }

  if (!spec.invitationId) {
    issues.push({ path: "invitationId", message: "Invitation id is required." });
  }

  if (spec.scenes.length === 0) {
    issues.push({ path: "scenes", message: "At least one scene is required." });
  }

  spec.scenes.forEach((scene, index) => {
    const path = `scenes[${index}]`;

    if (sceneIds.has(scene.id)) {
      issues.push({ path: `${path}.id`, message: "Scene ids must be unique." });
    }
    sceneIds.add(scene.id);

    if (scene.order < 0 || !Number.isInteger(scene.order)) {
      issues.push({
        path: `${path}.order`,
        message: "Scene order must be a non-negative integer.",
      });
    }

    if (scene.durationMs !== undefined && scene.durationMs < 0) {
      issues.push({ path: `${path}.durationMs`, message: "Duration cannot be negative." });
    }
  });

  const interactionIds = new Set(spec.interactions.map((interaction) => interaction.id));

  spec.scenes.forEach((scene, index) => {
    scene.interactionIds.forEach((interactionId) => {
      if (!interactionIds.has(interactionId)) {
        issues.push({
          path: `scenes[${index}].interactionIds`,
          message: `Unknown interaction "${interactionId}".`,
        });
      }
    });
  });

  return { valid: issues.length === 0, issues };
};
