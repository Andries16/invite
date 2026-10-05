import type { SceneComponent } from "@invite/invitation-schema";

export const getString = (value: unknown, fallback = ""): string =>
  typeof value === "string" ? value : fallback;

export const getStringList = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];

export const componentTitle = (component: SceneComponent): string =>
  getString(component.content.title, getString(component.content.text, component.kind));
