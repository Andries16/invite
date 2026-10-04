# Phase 13: Quality & Security

## Prototype Mapping
Maps to prototype capability: **Analytics**

## Architectural Boundaries

### 1. Schema (`packages/*`)
- N/A

### 2. API Domain (`apps/api/src/domains/*`)
- `analytics`

### 3. Creator UI (`apps/creator` & `packages/design-system`)
- Funnel charts, interaction performance

### 4. Worker & Runtime (`apps/worker` & `apps/public`)
- Event pipeline, analytics aggregation


## Cross-cutting quality requirements

- Storybook must build in CI.
- Every reusable creator component must have at least one Storybook story.
- Accessibility checks must be enabled for creator stories.
- Visual states must be reviewable in isolation before integration.
- Storybook stories must not require the API, database, queue, AI provider or production storage.
- Public invitation components must remain independent of the creator design system and MUI.
