# Phase 10: Distribution

## Prototype Mapping
Maps to prototype capability: **Distribution**

## Architectural Boundaries

### 1. Schema (`packages/*`)
- `invitation-schema` (DNS, SEO)

### 2. API Domain (`apps/api/src/domains/*`)
- `distribution`

### 3. Creator UI (`apps/creator` & `packages/design-system`)
- QR code generator, domain management

### 4. Worker & Runtime (`apps/worker` & `apps/public`)
- Edge CDN setup, domain routing
