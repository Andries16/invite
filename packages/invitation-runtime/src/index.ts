import type {
  ExperienceInteraction,
  ExperienceSpec,
  ExperienceTheme,
  SceneComponent,
  SceneSpec,
  SceneTrigger,
  VariableDefinition,
} from "@invite/invitation-schema";

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

const isString = (value: unknown): value is string => typeof value === "string";

const requiredThemeKeys: Array<keyof ExperienceTheme> = [
  "background",
  "surface",
  "text",
  "mutedText",
  "primary",
  "secondary",
  "accent",
  "border",
];

const motionLevels = ["none", "subtle", "moderate", "expressive", "cinematic"] as const;

const isMotionLevel = (value: unknown): value is ExperienceSpec["design"]["motion"] =>
  isString(value) && motionLevels.some((level) => level === value);

const isSceneTrigger = (value: unknown): value is SceneTrigger => {
  if (!isRecord(value) || !isString(value.type)) return false;
  if (value.type === "load") return true;
  if (value.type === "scroll") {
    return value.threshold === undefined || typeof value.threshold === "number";
  }
  if (value.type === "click") {
    return isString(value.target) && value.target.length > 0;
  }
  if (value.type === "after") {
    return typeof value.seconds === "number" && value.seconds >= 0;
  }
  return isString(value.interactionId) && value.interactionId.length > 0;
};

const isSceneComponent = (value: unknown): value is SceneComponent =>
  isRecord(value) && isString(value.kind) && isRecord(value.content);

const isScene = (value: unknown): value is SceneSpec =>
  isRecord(value) &&
  isString(value.id) &&
  typeof value.order === "number" &&
  Number.isInteger(value.order) &&
  value.order >= 0 &&
  isString(value.purpose) &&
  isSceneTrigger(value.trigger) &&
  isRecord(value.content) &&
  Array.isArray(value.mediaIds) &&
  value.mediaIds.every(isString) &&
  Array.isArray(value.interactionIds) &&
  value.interactionIds.every(isString) &&
  (value.components === undefined ||
    (Array.isArray(value.components) && value.components.every(isSceneComponent))) &&
  (value.durationMs === undefined ||
    (typeof value.durationMs === "number" &&
      Number.isFinite(value.durationMs) &&
      value.durationMs >= 0));

const isInteraction = (value: unknown): value is ExperienceInteraction =>
  isRecord(value) &&
  isString(value.type) &&
  isString(value.id) &&
  (value.type === "reveal" ||
    value.type === "rsvp" ||
    value.type === "guestbook" ||
    ((value.type === "quiz" || value.type === "branch") &&
      Array.isArray(value.choices) &&
      value.choices.every(isString)));

const isVariableDefinition = (value: unknown): value is VariableDefinition =>
  isRecord(value) &&
  isString(value.key) &&
  ["string", "number", "boolean", "url"].includes(String(value.type)) &&
  (value.required === undefined || typeof value.required === "boolean");

export const isExperienceSpec = (value: unknown): value is ExperienceSpec => {
  if (!isRecord(value)) return false;
  if (!isString(value.schemaVersion) || !isString(value.id) || !isString(value.invitationId)) {
    return false;
  }
  if (!isString(value.visualLanguage) || !isRecord(value.design)) return false;

  const design = value.design;
  if (!isRecord(design.theme) || !isMotionLevel(design.motion)) return false;
  const theme = design.theme;
  if (!requiredThemeKeys.every((key) => isString(theme[key]))) return false;
  if (theme.headingFont !== undefined && !isString(theme.headingFont)) {
    return false;
  }
  if (theme.bodyFont !== undefined && !isString(theme.bodyFont)) {
    return false;
  }
  if (!Array.isArray(value.scenes) || !value.scenes.every(isScene)) return false;
  if (!Array.isArray(value.interactions) || !value.interactions.every(isInteraction)) {
    return false;
  }

  return Array.isArray(value.variables) && value.variables.every(isVariableDefinition);
};

const validateTheme = (theme: unknown, issues: RuntimeValidationIssue[]): void => {
  if (!isRecord(theme)) {
    issues.push({
      path: "design.theme",
      message: "Design theme is required.",
    });
    return;
  }

  requiredThemeKeys.forEach((key) => {
    if (!isString(theme[key]) || theme[key] === "") {
      issues.push({
        path: "design.theme." + key,
        message: "Theme value must be a non-empty string.",
      });
    }
  });

  ["headingFont", "bodyFont"].forEach((key) => {
    if (theme[key] !== undefined && !isString(theme[key])) {
      issues.push({
        path: "design.theme." + key,
        message: "Font value must be a string when provided.",
      });
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

export const validateExperienceSpec = (spec: unknown): RuntimeValidationResult => {
  const issues: RuntimeValidationIssue[] = [];

  if (!isRecord(spec)) {
    return {
      valid: false,
      issues: [
        {
          path: "",
          message: "Experience definition must be an object.",
        },
      ],
    };
  }

  if (!isString(spec.schemaVersion) || !spec.schemaVersion) {
    issues.push({
      path: "schemaVersion",
      message: "Schema version is required.",
    });
  }
  if (!isString(spec.id) || !spec.id) {
    issues.push({
      path: "id",
      message: "Experience id is required.",
    });
  }
  if (!isString(spec.invitationId) || !spec.invitationId) {
    issues.push({
      path: "invitationId",
      message: "Invitation id is required.",
    });
  }
  if (!isString(spec.visualLanguage) || !spec.visualLanguage) {
    issues.push({
      path: "visualLanguage",
      message: "Visual language is required.",
    });
  }

  if (!isRecord(spec.design)) {
    issues.push({
      path: "design",
      message: "Design is required.",
    });
  } else {
    validateTheme(spec.design.theme, issues);
    if (!isMotionLevel(spec.design.motion)) {
      issues.push({
        path: "design.motion",
        message: "Design motion must be a supported motion level.",
      });
    }
  }

  const sceneIds = new Set<string>();

  if (!Array.isArray(spec.scenes)) {
    issues.push({
      path: "scenes",
      message: "Scenes must be an array.",
    });
  } else {
    if (spec.scenes.length === 0) {
      issues.push({
        path: "scenes",
        message: "At least one scene is required.",
      });
    }

    spec.scenes.forEach((scene, index) => {
      const path = "scenes[" + index + "]";

      if (!isScene(scene)) {
        issues.push({
          path,
          message: "Scene has an invalid structure.",
        });
        return;
      }

      if (sceneIds.has(scene.id)) {
        issues.push({
          path: path + ".id",
          message: "Scene ids must be unique.",
        });
      } else {
        sceneIds.add(scene.id);
      }

      if (scene.components === undefined && Object.keys(scene.content).length === 0) {
        issues.push({
          path: path + ".content",
          message: "Scene content cannot be empty when components are omitted.",
        });
      }
    });
  }

  if (!Array.isArray(spec.interactions) || !spec.interactions.every(isInteraction)) {
    issues.push({
      path: "interactions",
      message: "Interactions must be an array of valid interaction definitions.",
    });
  }

  if (!Array.isArray(spec.variables) || !spec.variables.every(isVariableDefinition)) {
    issues.push({
      path: "variables",
      message: "Variables must be an array of valid variable definitions.",
    });
  }

  if (Array.isArray(spec.interactions) && Array.isArray(spec.scenes)) {
    const interactionIds = new Set(
      spec.interactions.filter(isInteraction).map((interaction) => interaction.id),
    );

    spec.scenes.filter(isScene).forEach((scene, index) => {
      scene.interactionIds.forEach((interactionId) => {
        if (!interactionIds.has(interactionId)) {
          issues.push({
            path: "scenes[" + index + "].interactionIds",
            message: 'Unknown interaction "' + interactionId + '".',
          });
        }
      });
    });
  }

  return {
    valid: issues.length === 0,
    issues,
  };
};
