export type InteractionKind =
  "reveal" | "quiz" | "branch" | "rsvp" | "guestbook" | "countdown";
export interface InteractionSpec {
  id: string;
  kind: InteractionKind;
  config: Record<string, unknown>;
}
