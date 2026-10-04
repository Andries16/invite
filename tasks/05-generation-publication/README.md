# Phase 5: Generation & Publication

## Prototype Mapping
Maps to prototype capability: **Distribution (Publishing), Versioning, Preview and Guest Playback**

## Architectural Boundaries

### 1. Schema
- Versioned `ExperienceSpec` / build metadata.
- Renderer and component versions required to reproduce historical artifacts.
- Publication identity, stable URL and immutable artifact metadata.

### 2. API Domain (`apps/api/src/domains/publication`)
- Create generation jobs.
- Track build/version status.
- Publish and unpublish logical versions.
- Keep the logical public URL independent from build IDs and storage URLs.

### 3. Creator UI (`apps/creator` & `packages/design-system`)
- Pre-publish review.
- Desktop/mobile preview.
- Play as guest.
- Accessibility/performance warnings.
- Publish dialog and version history.

### 4. Worker & Runtime
- Worker validates the normalized spec, renders deterministic output and stores an immutable artifact.
- Public runtime serves the published artifact without requiring the creator UI, API or database for ordinary page delivery.
- Rebuilds update the logical URL target without changing the URL or QR code.

## Hard requirements

- Never publish arbitrary AI-generated scripts.
- Generation must be deterministic for a fixed spec + renderer/component versions.
- Published artifacts are immutable.
- Stable URLs must never expose build IDs or temporary storage URLs.
