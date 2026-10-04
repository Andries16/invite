# Phase 5: Generation & Publication

## Prototype Mapping
Maps to prototype capability: **Distribution (Publishing)**

## Architectural Boundaries

### 1. Schema (`packages/*`)
- `invitation-schema` (Build metadata)

### 2. API Domain (`apps/api/src/domains/*`)
- `publication`

### 3. Creator UI (`apps/creator` & `packages/design-system`)
- Publish dialogs, version history

### 4. Worker & Runtime (`apps/worker` & `apps/public`)
- Worker: `invitation-generator` static HTML rendering, immutable storage
