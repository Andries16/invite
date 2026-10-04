export interface Invitation { id: string; title: string; experienceId: string; status: "draft" | "published" | "archived"; }
export interface Experience { id: string; invitationId: string; version: number; status: "draft" | "published" | "archived"; }
export interface Campaign { id: string; invitationId: string; name: string; recipientCount: number; }
export interface MediaAsset { id: string; kind: "image" | "gif" | "video" | "audio" | "voice" | "sticker" | "map" | "screenshot"; status: "pending" | "ready" | "failed"; }
