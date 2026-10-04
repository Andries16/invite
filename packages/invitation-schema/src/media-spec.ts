export type MediaKind =
  "image" | "gif" | "video" | "audio" | "voice" | "sticker" | "map" | "screenshot";
export interface MediaReference {
  id: string;
  kind: MediaKind;
  alt?: string;
}
