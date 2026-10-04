# Phase 11: Collaboration & Commerce

## Prototype Mapping
Maps to prototype capability: **Workspace / Collaboration / Review / Billing / Usage / Entitlements**

### Schema
Add versioned workspace, membership, role, plan, entitlement and usage contracts under dedicated packages when those domains become active. Do not leave the schema boundary undefined merely because the first implementation can use shared types.

### API Domain
- `workspaces`: membership, roles, invitations and access control.
- `billing`: plans, subscriptions, usage and webhook processing.
- Entitlements must be enforced server-side, not only hidden in the creator UI.

### Creator UI
- Team/member management.
- Review and approval states for collaborative editing.
- Billing portal.
- Usage and entitlement visibility.
- Plan-aware feature gating with clear upgrade states.

### Worker & Runtime
- Payment/webhook processing is asynchronous.
- Public experiences must remain accessible according to the published entitlement state; billing implementation must not leak private creator data into public artifacts.

### Requirements
- Workspace isolation is mandatory.
- Role checks belong at the API boundary.
- Billing providers are abstracted behind a provider boundary.
- Usage accounting is auditable and idempotent.
