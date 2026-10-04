export type ExperienceId = string & { readonly __brand: "ExperienceId" };
export type SceneId = string & { readonly __brand: "SceneId" };

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

export interface ExperienceSpec { schemaVersion: string; id: ExperienceId; invitationId: string; visualLanguage: string; scenes: SceneSpec[]; interactions: ExperienceInteraction[]; variables: VariableDefinition[]; }
export interface SceneSpec { id: SceneId; order: number; purpose: string; trigger: SceneTrigger; content: Record<string, unknown>; mediaIds: string[]; interactionIds: string[]; durationMs?: number; }
export interface VariableDefinition { key: string; type: "string" | "number" | "boolean" | "url"; required?: boolean; }
