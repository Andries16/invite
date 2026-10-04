# Phase 0: Foundation

## Prototype Mapping

Maps to prototype capability: **Workspace / Account / Settings / Infrastructure**

## Architectural Boundaries

### 1. Schema (`packages/shared`)

- Core schemas for identity, workspaces, and generic metadata.

### 2. API Domain (`apps/api/src/infrastructure/*`)

- `auth/`: Authentication, session validation, and permissions.
- `database/`: Prisma/Drizzle models, connection pooling.
- `queue/`: Async job queue definitions.
- `observability/`: Request IDs, telemetry, structured logging.

### 3. Creator UI (`apps/creator` & `packages/design-system`)

- Scaffold standard layouts (Sidebars, Topbars).
- Connect auth state and workspace context.

### 4. Worker & Runtime

- Establish base worker loop in `apps/worker` to listen for jobs.
