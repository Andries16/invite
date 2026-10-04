# Phase 7: Campaigns

## Prototype Mapping
Maps to prototype capability: **Campaigns / Bulk Guest Personalization**

## Architectural Boundaries

### 1. Schema (`packages/campaign-schema`)
- Defines `Recipient`, `Campaign`, and typed variables (e.g. `{{guest.name}}`).

### 2. API Domain (`apps/api/src/domains/campaigns`)
- CSV ingestion, validation, and recipient management.

### 3. Creator UI (`apps/creator`)
- Campaign Dashboard (Open rates, RSVP rates, recipient tables).

### 4. Worker & Runtime (`apps/worker`)
- Shared artifact generation. Bulk URL generation. NOT doing independent builds for each recipient.
