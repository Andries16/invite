import type { ExperienceId, ExperienceSpec, SceneId } from "@invite/invitation-schema";

const experienceId = "exp-a-little-surprise" as ExperienceId;
const invitationId = "inv-a-little-surprise";

const scene = (
  id: string,
  order: number,
  purpose: string,
  durationMs: number,
  componentKind: "hero" | "text" | "quiz" | "reveal" | "map" | "rsvp" | "celebration",
  content: Record<string, unknown> = {},
) => ({
  id: id as SceneId,
  order,
  purpose,
  trigger:
    order === 0 ? ({ type: "load" } as const) : ({ type: "scroll", threshold: 0.5 } as const),
  content,
  components: [{ kind: componentKind, content }],
  mediaIds: [],
  interactionIds:
    componentKind === "quiz"
      ? ["question"]
      : componentKind === "reveal"
        ? ["location-reveal"]
        : componentKind === "rsvp"
          ? ["rsvp"]
          : [],
  durationMs,
});

export const sampleExperience: ExperienceSpec = {
  schemaVersion: "1.0",
  id: experienceId,
  invitationId,
  visualLanguage: "cinematic",
  design: {
    theme: {
      background: "#fffaf3",
      surface: "#ffffff",
      text: "#241f1a",
      mutedText: "#766e66",
      primary: "#7b4d8d",
      secondary: "#c99a4a",
      accent: "#d9779b",
      border: "#e8ded3",
      headingFont: "Georgia, serif",
      bodyFont: "Inter, system-ui, sans-serif",
    },
    motion: "cinematic",
  },
  scenes: [
    scene("opening", 0, "A cinematic introduction that establishes the mood.", 8200, "hero", {
      title: "Elena & Victor",
      eyebrow: "SEPTEMBER 28",
      description: "A little surprise is waiting for you.",
    }),
    scene(
      "memory",
      1,
      "One personal memory with photo, caption and ambient motion.",
      12000,
      "text",
      {
        title: "Memory beat",
        text: "One of our favorite moments, kept here for you.",
      },
    ),
    scene(
      "question",
      2,
      "A playful question that invites the guest to participate.",
      15000,
      "quiz",
      {
        title: "The question",
        question: "Ready for one little clue?",
        choices: ["Absolutely", "Give me a hint"],
      },
    ),
    scene("reveal", 3, "The central surprise with a deliberate visual pause.", 7400, "reveal", {
      title: "The reveal",
      text: "The exact location unlocks now.",
    }),
    scene("location", 4, "Date, place and practical information.", 10000, "map", {
      title: "Location",
      date: "September 28",
      place: "Valea Morilor",
      time: "Sunset",
    }),
    scene("rsvp", 5, "Collect attendance and optional guest information.", 18000, "rsvp", {
      title: "RSVP",
      prompt: "Will you join us?",
    }),
    scene("finale", 6, "A warm closing moment with sharing and replay.", 6000, "celebration", {
      title: "See you there",
      text: "A little story, one beautiful evening.",
    }),
  ],
  interactions: [
    { type: "quiz", id: "question", choices: ["Absolutely", "Give me a hint"] },
    { type: "reveal", id: "location-reveal" },
    { type: "rsvp", id: "rsvp" },
  ],
  variables: [
    { key: "guestName", type: "string" },
    { key: "rsvpStatus", type: "string" },
  ],
};

export const getSceneTitle = (scene: ExperienceSpec["scenes"][number]): string =>
  String(scene.content.title ?? scene.purpose);

export const getSceneDescription = (scene: ExperienceSpec["scenes"][number]): string =>
  String(scene.content.description ?? scene.content.text ?? scene.purpose);

export const getSceneDisplayType = (scene: ExperienceSpec["scenes"][number]): string => {
  const kind = scene.components?.[0]?.kind;
  return kind ? kind.charAt(0).toUpperCase() + kind.slice(1) : "Scene";
};

export const getSceneDurationLabel = (scene: ExperienceSpec["scenes"][number]): string =>
  scene.durationMs === undefined ? "Auto" : (scene.durationMs / 1000).toFixed(1) + "s";
