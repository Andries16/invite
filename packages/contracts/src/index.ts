export type ExperienceId = string & { readonly __brand: "ExperienceId" };
export type SceneId = string & { readonly __brand: "SceneId" };

export interface ExperienceSpec {
  schemaVersion: string;
  id: ExperienceId;
  invitationId: string;
  scenes: SceneSpec[];
  variables: VariableDefinition[];
}

export interface SceneSpec {
  id: SceneId;
  order: number;
  purpose: string;
  trigger: SceneTrigger;
  content: Record<string, unknown>;
  mediaIds: string[];
  interactionIds: string[];
  durationMs?: number;
}

export type SceneTrigger =
  | { type: "load" }
  | { type: "scroll"; threshold?: number }
  | { type: "click"; target: string }
  | { type: "after"; seconds: number }
  | { type: "interaction-complete"; interactionId: string };

export interface VariableDefinition { key: string; type: "string" | "number" | "boolean" | "url"; required?: boolean }
