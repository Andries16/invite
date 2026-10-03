# T11.01 — Configure CDN and Edge Caching

| Field | Value |
| --- | --- |
| Phase | [11 — Public Delivery](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T05.04](../05-renderer/05-04-theme-application.md), [T12.01](../12-infrastructure/12-01-setup-iac.md) |
| Unblocks | [T11.03](11-03-public-routing.md) |
| Docs | [PUBLIC_DELIVERY.md](../../PUBLIC_DELIVERY.md), [INFRASTRUCTURE.md](../../INFRASTRUCTURE.md) |

## Goal
Set up CDN rules to heavily cache the static assets and HTML produced by the renderer.

## Scope
- Cloudflare/CloudFront configuration (IaC).
- Cache-control headers and invalidation policies.

## Deliverables
- CDN infrastructure definitions.

## Acceptance criteria
- [ ] Public requests hit edge cache, minimizing origin fetch.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
