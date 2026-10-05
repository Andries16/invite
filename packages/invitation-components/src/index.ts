import type { ExperienceComponentKind, SceneComponent } from "@invite/invitation-schema";

export type { ExperienceComponentKind, SceneComponent };

export interface ComponentRenderContext {
  reducedMotion: boolean;
  variables: Record<string, string | number | boolean>;
}

export const isSupportedComponent = (
  kind: string,
): kind is ExperienceComponentKind =>
  [
    "hero",
    "text",
    "image",
    "gif",
    "video",
    "gallery",
    "timeline",
    "countdown",
    "quiz",
    "reveal",
    "rsvp",
    "guestbook",
    "map",
    "audio",
    "celebration",
  ].includes(kind);

export { ExperienceRenderer } from "./ExperienceRenderer";
export type { ExperienceRendererProps } from "./ExperienceRenderer";
