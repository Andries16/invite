import type { ExperienceSpec } from "@invite/invitation-schema";

export type AiJobType = "interview" | "storyboard" | "experience-compose" | "copy" | "refine";

export interface AiJob {
  id: string;
  type: AiJobType;
  input: unknown;
}

export type InterviewRole = "assistant" | "user";

export interface InterviewMessage {
  role: InterviewRole;
  content: string;
}

export type AIInteraction =
  | { type: "single_choice"; id: string; question: string; options: string[] }
  | { type: "multi_choice"; id: string; question: string; options: string[] }
  | { type: "text"; id: string; question: string; placeholder?: string }
  | { type: "date"; id: string; question: string }
  | { type: "color"; id: string; question: string }
  | { type: "media"; id: string; question: string; accept: string[] }
  | { type: "confirmation"; id: string; summary: string };

export interface DesignBrief {
  emotionalIntent: string[];
  visualKeywords: string[];
  avoid: string[];
  typographyDirection: string;
  colorDirection: string;
  imageryDirection: string;
  motionLevel: "none" | "subtle" | "moderate" | "expressive" | "cinematic";
  interactionLevel: "minimal" | "moderate" | "rich";
  invitationType: string;
  goal: string;
  audience?: string;
  date?: string;
  location?: string;
  hiddenDetails?: string[];
  memories?: string[];
  constraints?: string[];
}

export type CreativeBrief = DesignBrief;

export interface ExperienceSpecPatch {
  schemaVersion: string;
  operations: ExperienceSpecOperation[];
}

export type ExperienceSpecOperation =
  | {
      op: "set";
      path:
        | "/visualLanguage"
        | "/design/motion"
        | "/design/theme/headingFont"
        | "/design/theme/bodyFont";
      value: string;
    }
  | {
      op: "set";
      path:
        | "/design/theme/background"
        | "/design/theme/surface"
        | "/design/theme/text"
        | "/design/theme/mutedText"
        | "/design/theme/primary"
        | "/design/theme/secondary"
        | "/design/theme/accent"
        | "/design/theme/border";
      value: string;
    }
  | {
      op: "set-scene-purpose";
      sceneId: ExperienceSpec["scenes"][number]["id"];
      value: string;
    }
  | {
      op: "set-scene-content";
      sceneId: ExperienceSpec["scenes"][number]["id"];
      value: Record<string, unknown>;
    };

export interface AiProposal<T> {
  kind: "experience-spec-patch";
  proposal: T;
  rationale: string[];
  confidence: number;
  requiresReview: boolean;
}

const normalizeTone = (tone: DesignBrief["emotionalIntent"]): string =>
  tone.filter(Boolean).join(", ") || "personal";

const normalizeVisualDirection = (brief: DesignBrief): string =>
  brief.visualKeywords.filter(Boolean).join(", ") || normalizeTone(brief.emotionalIntent);

export const applyExperienceSpecPatch = (
  base: ExperienceSpec,
  patch: ExperienceSpecPatch,
): ExperienceSpec => {
  if (patch.schemaVersion !== base.schemaVersion) {
    throw new Error(`Unsupported ExperienceSpec patch version: ${patch.schemaVersion}`);
  }

  return patch.operations.reduce<ExperienceSpec>((next, operation) => {
    if (operation.op === "set") {
      if (operation.path === "/visualLanguage") return { ...next, visualLanguage: operation.value };
      if (operation.path === "/design/motion") {
        return {
          ...next,
          design: { ...next.design, motion: operation.value as ExperienceSpec["design"]["motion"] },
        };
      }
      const themePath = operation.path.slice(
        "/design/theme/".length,
      ) as keyof ExperienceSpec["design"]["theme"];
      return {
        ...next,
        design: { ...next.design, theme: { ...next.design.theme, [themePath]: operation.value } },
      };
    }

    const sceneIndex = next.scenes.findIndex((scene) => scene.id === operation.sceneId);
    if (sceneIndex < 0) throw new Error(`Unknown scene id: ${String(operation.sceneId)}`);
    const scenes = [...next.scenes];
    const scene = scenes[sceneIndex];
    scenes[sceneIndex] =
      operation.op === "set-scene-purpose"
        ? { ...scene, purpose: operation.value }
        : { ...scene, content: operation.value };
    return { ...next, scenes };
  }, base);
};

export const createExperienceSpecProposal = (
  brief: DesignBrief,
  base: Pick<ExperienceSpec, "schemaVersion" | "scenes">,
): AiProposal<ExperienceSpecPatch> => {
  const visualLanguage = normalizeVisualDirection(brief);
  const operations: ExperienceSpecOperation[] = [
    {
      op: "set",
      path: "/visualLanguage",
      value: visualLanguage,
    },
  ];

  if (brief.goal.trim()) {
    const firstScene = base.scenes[0];
    if (firstScene) {
      operations.push({
        op: "set-scene-purpose",
        sceneId: firstScene.id,
        value: brief.goal.trim(),
      });
    }
  }

  if (brief.date || brief.location) {
    const locationScene = base.scenes.find((scene) => scene.content.title === "Location");

    if (locationScene) {
      operations.push({
        op: "set-scene-content",
        sceneId: locationScene.id,
        value: {
          ...locationScene.content,
          ...(brief.date ? { date: brief.date } : {}),
          ...(brief.location ? { place: brief.location } : {}),
        },
      });
    }
  }

  return {
    kind: "experience-spec-patch",
    proposal: {
      schemaVersion: base.schemaVersion,
      operations,
    },
    rationale: [
      "AI output is constrained to typed ExperienceSpec operations.",
      "Production components and executable code remain outside the AI output boundary.",
    ],
    confidence: operations.length > 1 ? 0.82 : 0.68,
    requiresReview: true,
  };
};
