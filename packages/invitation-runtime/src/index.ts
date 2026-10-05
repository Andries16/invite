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

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const requiredThemeKeys = ["background", "surface", "text", "mutedText", "primary", "secondary", "accent", "border"];

const validateTheme = (theme: unknown, issues: RuntimeValidationIssue[]): void => {
  if (!isRecord(theme)) {
    issues.push({ path: "design.theme", message: "Design theme is required." });
    return;
  }
  requiredThemeKeys.forEach((key) => {
    if (typeof theme[key] !== "string" || theme[key] === "") {
      issues.push({ path: `design.theme.${key}`, message: "Theme value must be a non-empty string." });
    }
  });
  ["headingFont", "bodyFont"].forEach((key) => {
    if (theme[key] !== undefined && typeof theme[key] !== "string") {
      issues.push({ path: `design.theme.${key}`, message: "Font value must be a string when provided." });
    }
  });
};

export const createInitialRuntimeState = (mode: RuntimeMode): RuntimeState => ({
  mode,
  currentSceneId: null,
  sceneStatus: "idle",
});

export const getOrderedScenes = (spec: ExperienceSpec): SceneSpec[] =>
  [...spec.scenes].sort((left, right) => left.order - right.order);

export const getSceneById = (spec: ExperienceSpec, sceneId: SceneSpec["id"]): SceneSpec | undefined =>
  spec.scenes.find((scene) => scene.id === sceneId);

export const getInitialScene = (spec: ExperienceSpec): SceneSpec | undefined => getOrderedScenes(spec)[0];

export const getNextScene = (spec: ExperienceSpec, sceneId: SceneSpec["id"]): SceneSpec | undefined => {
  const scenes = getOrderedScenes(spec);
  const index = scenes.findIndex((scene) => scene.id === sceneId);
  return index >= 0 ? scenes[index + 1] : undefined;
};

export const isAutomaticTrigger = (trigger: SceneTrigger): boolean =>
  trigger.type === "load" || trigger.type === "after";

export const validateExperienceSpec = (spec: ExperienceSpec): RuntimeValidationResult => {
  const issues: RuntimeValidationIssue[] = [];

  if (!isRecord(spec)) {
    return { valid: false, issues: [{ path: "", message: "Experience definition must be an object." }] };
  }

  if (typeof spec.schemaVersion !== "string" || !spec.schemaVersion) issues.push({ path: "schemaVersion", message: "Schema version is required." });
  if (typeof spec.id !== "string" || !spec.id) issues.push({ path: "id", message: "Experience id is required." });
  if (typeof spec.invitationId !== "string" || !spec.invitationId) issues.push({ path: "invitationId", message: "Invitation id is required." });
  if (typeof spec.visualLanguage !== "string" || !spec.visualLanguage) issues.push({ path: "visualLanguage", message: "Visual language is required." });
  if (!isRecord(spec.design)) issues.push({ path: "design", message: "Design is required." });
  else {
    validateTheme(spec.design.theme, issues);
    if (typeof spec.design.motion !== "string" || !["none", "subtle", "moderate", "expressive", "cinematic"].includes(spec.design.motion)) {
      issues.push({ path: "design.motion", message: "Design motion must be a supported motion level." });
    }
  }

  const sceneIds = new Set<string>();
  if (!Array.isArray(spec.scenes)) {
    issues.push({ path: "scenes", message: "Scenes must be an array." });
    return { valid: issues.length === 0, issues };
  }
  if (spec.scenes.length === 0) issues.push({ path: "scenes", message: "At least one scene is required." });

  spec.scenes.forEach((scene, index) => {
    const path = `scenes[${index}]`;
    if (!isRecord(scene)) {
      issues.push({ path, message: "Scene must be an object." });
      return;
    }
    if (typeof scene.id !== "string" || !scene.id) issues.push({ path: `${path}.id`, message: "Scene id is required." });
    else if (sceneIds.has(scene.id)) issues.push({ path: `${path}.id`, message: "Scene ids must be unique." });
    else sceneIds.add(scene.id);
    if (typeof scene.order !== "number" || scene.order < 0 || !Number.isInteger(scene.order)) issues.push({ path: `${path}.order`, message: "Scene order must be a non-negative integer." });
    if (scene.durationMs !== undefined && (typeof scene.durationMs !== "number" || scene.durationMs < 0)) issues.push({ path: `${path}.durationMs`, message: "Duration must be a non-negative number." });
    if (!isRecord(scene.trigger) || typeof scene.trigger.type !== "string") issues.push({ path: `${path}.trigger`, message: "Scene trigger is required." });
    if (!Array.isArray(scene.mediaIds)) issues.push({ path: `${path}.mediaIds`, message: "Scene mediaIds must be an array." });
    if (!Array.isArray(scene.interactionIds)) issues.push({ path: `${path}.interactionIds`, message: "Scene interactionIds must be an array." });
  });

  if (!Array.isArray(spec.interactions)) issues.push({ path: "interactions", message: "Interactions must be an array." });
  if (!Array.isArray(spec.variables)) issues.push({ path: "variables", message: "Variables must be an array." });

  if (Array.isArray(spec.interactions) && Array.isArray(spec.scenes)) {
    const interactionIds = new Set(spec.interactions.map((interaction) => interaction.id));
    spec.scenes.forEach((scene, index) => {
      if (!isRecord(scene) || !Array.isArray(scene.interactionIds)) return;
      scene.interactionIds.forEach((interactionId) => {
        if (typeof interactionId === "string" && !interactionIds.has(interactionId)) {
          issues.push({ path: `scenes[${index}].interactionIds`, message: `Unknown interaction "${interactionId}".` });
        }
      });
    });
  }

  return { valid: issues.length === 0, issues };
};
