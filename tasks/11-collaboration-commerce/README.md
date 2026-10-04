# Phase 11: Team & Billing

## Prototype Mapping
Maps to prototype capability: **Team / Account & plan / Billing**

## Architectural Boundaries

### 1. Schema (`packages/*`)
- N/A

### 2. API Domain (`apps/api/src/domains/*`)
- `workspaces`, `billing`

### 3. Creator UI (`apps/creator` & `packages/design-system`)
- Team roles UI, Billing portal, limits dashboard

### 4. Worker & Runtime (`apps/worker` & `apps/public`)
- Payment webhook processing (Worker)
