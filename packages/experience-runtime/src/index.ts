export type ExperienceRuntimeMode = "preview" | "guest" | "production";

export type SceneStatus = "idle" | "active" | "completed";

export type SceneTrigger =
  | { type: "load" }
  | { type: "scroll"; threshold?: number }
  | { type: "click"; target: string }
  | { type: "after"; seconds: number }
  | { type: "interaction-complete"; interactionId: string };

export interface SceneRuntimeState {
  sceneId: string;
  status: SceneStatus;
}
