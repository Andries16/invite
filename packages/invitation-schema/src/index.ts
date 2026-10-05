export type ExperienceId = string & { readonly __brand: "ExperienceId" };
export type SceneId = string & { readonly __brand: "SceneId" };

export type MotionLevel = "none" | "subtle" | "moderate" | "expressive" | "cinematic";

export interface ExperienceTheme {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  secondary: string;
  accent: string;
  border: string;
  headingFont?: string;
  bodyFont?: string;
}

export interface ExperienceDesign {
  theme: ExperienceTheme;
  motion: MotionLevel;
}

export type SceneTrigger =
  | { type: "load" }
  | { type: "scroll"; threshold?: number }
  | { type: "click"; target: string }
  | { type: "after"; seconds: number }
  | { type: "interaction-complete"; interactionId: string };

export type ExperienceInteraction =
  | { type: "reveal"; id: string }
  | { type: "quiz"; id: string; choices: string[] }
  | { type: "branch"; id: string; choices: string[] }
  | { type: "rsvp"; id: string }
  | { type: "guestbook"; id: string };

export type ExperienceComponentKind =
  | "hero"
  | "text"
  | "image"
  | "gif"
  | "video"
  | "gallery"
  | "timeline"
  | "countdown"
  | "quiz"
  | "reveal"
  | "rsvp"
  | "guestbook"
  | "map"
  | "audio"
  | "celebration";

export interface SceneComponent {
  kind: ExperienceComponentKind;
  content: Record<string, unknown>;
}

export interface ExperienceSpec {
  schemaVersion: string;
  id: ExperienceId;
  invitationId: string;
  visualLanguage: string;
  design: ExperienceDesign;
  scenes: SceneSpec[];
  interactions: ExperienceInteraction[];
  variables: VariableDefinition[];
}

export interface SceneSpec {
  id: SceneId;
  order: number;
  purpose: string;
  trigger: SceneTrigger;
  content: Record<string, unknown>;
  components?: SceneComponent[];
  mediaIds: string[];
  interactionIds: string[];
  durationMs?: number;
}

export interface VariableDefinition {
  key: string;
  type: "string" | "number" | "boolean" | "url";
  required?: boolean;
}
