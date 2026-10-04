# Phase 1: Experience Core

## Prototype Mapping
Maps to prototype capability: **Experiences / Invitations**

## Architectural Boundaries

### 1. Schema (`packages/invitation-schema`)
- Expand `ExperienceSpec` to include explicit fields for:
  - `story`, `creativeDirection`, `design`, `scenes`, `interactions`, `media`, `audio`, `variables`, `localization`, `analytics`, `metadata`
- Strict Zod validation for runtime safety.

### 2. API Domain (`apps/api/src/domains/experiences` & `invitations`)
- CRUD operations for `ExperienceSpec` objects.
- Endpoint to query active variations.

### 3. Creator UI (`apps/creator`)
- Experience Editor (canvas, scene navigation, layers).
- Requires precise use of MUI 9.4.0 components from `@invite/design-system`.

### 4. Worker & Runtime (`apps/public`)
- `packages/invitation-runtime`: State machine for guest playback.
- `packages/invitation-components`: Trusted components executing validated specs.
