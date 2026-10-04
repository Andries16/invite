# Phase 8: Story Intelligence

## Prototype Mapping
Maps to prototype capability: **Story & AI Ingestion**

## Architectural Boundaries

### 1. Schema (`packages/story`)
- Defines the parsed, structured memory timeline, facts, and relationships.

### 2. API Domain (`apps/api/src/domains/story`)
- Endpoints to upload raw text/ZIPs and fetch structured facts.

### 3. Creator UI (`apps/creator`)
- Story view, AI memory board, provenance inspector.

### 4. Worker & Runtime (`apps/worker`)
- Delegates to `packages/ai/src/story-intelligence` to extract context.
