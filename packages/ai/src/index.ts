import type { ExperienceSpec } from "@invite/invitation-schema";

export type AiJobType =
  | "interview"
  | "storyboard"
  | "experience-compose"
  | "copy"
  | "refine";

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

export interface CreativeBrief {
  invitationType: string;
  goal: string;
  audience?: string;
  tone?: string[];
  visualDirection?: string;
  date?: string;
  location?: string;
  hiddenDetails?: string[];
  memories?: string[];
  constraints?: string[];
}

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

const normalizeTone = (tone: CreativeBrief["tone"]): string =>
  tone?.filter(Boolean).join(", ") || "personal";

const normalizeVisualDirection = (brief: CreativeBrief): string =>
  brief.visualDirection?.trim() || normalizeTone(brief.tone);

export const createExperienceSpecProposal = (
  brief: CreativeBrief,
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
    const locationScene = base.scenes.find((scene) =>
      scene.content.title === "Location",
    );

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
