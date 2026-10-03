# T11.02 — Implement Immutable Build Storage

| Field | Value |
| --- | --- |
| Phase | [11 — Public Delivery](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T05.04](../05-renderer/05-04-theme-application.md), [T12.01](../12-infrastructure/12-01-setup-iac.md) |
| Unblocks | [T10.03](../10-campaigns/10-03-personalization-engine.md), [T11.03](11-03-public-routing.md) |
| Docs | [PUBLIC_DELIVERY.md](../../PUBLIC_DELIVERY.md), [INFRASTRUCTURE.md](../../INFRASTRUCTURE.md) |

## Goal
Configure the object storage where the renderer will upload immutable, versioned builds of invitations.

## Scope
- S3/R2 bucket setup and strict IAM policies.

## Deliverables
- Object storage infrastructure definitions.

## Acceptance criteria
- [ ] Renderer can write builds, but public access is strictly read-only and restricted to CDN origin.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
