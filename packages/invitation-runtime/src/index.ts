import type { ExperienceSpec, SceneSpec } from "@invite/invitation-schema";

export type RuntimeMode = "preview" | "guest" | "production";
export type SceneStatus = "idle" | "active" | "completed";
export interface RuntimeState { mode: RuntimeMode; currentSceneId: SceneSpec["id"] | null; sceneStatus: SceneStatus; }
export const createInitialRuntimeState = (mode: RuntimeMode): RuntimeState => ({ mode, currentSceneId: null, sceneStatus: "idle" });
export const getOrderedScenes = (spec: ExperienceSpec): SceneSpec[] => [...spec.scenes].sort((left, right) => left.order - right.order);
