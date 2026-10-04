# Phase 9: Localization & Export

## Prototype Mapping

Maps to prototype capability: **Exports**

## Architectural Boundaries

### 1. Schema (`packages/*`)

- `export` schema

### 2. API Domain (`apps/api/src/domains/*`)

- `exports`

### 3. Creator UI (`apps/creator` & `packages/design-system`)

- Locale manager, ZIP/PDF download interfaces

### 4. Worker & Runtime (`apps/worker` & `apps/public`)

- Worker: Headless browser rendering, PDF/Image generation
