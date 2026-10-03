# T00.07 — ADR: edge and CDN provider

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T00.06](00-06-adr-public-url-convention.md) |
| Unblocks | — |
| Docs | [ARCHITECTURE.md](../../ARCHITECTURE.md), [PUBLIC_DELIVERY.md](../../PUBLIC_DELIVERY.md), [INFRASTRUCTURE.md](../../INFRASTRUCTURE.md), [README.md](../../adr/README.md) |

## Goal
Choose the edge/CDN provider and the publication lookup mechanism at the edge.

## Scope
- Evaluate Cloudflare Workers + KV/R2 or equivalents.
- Decide publication lookup cache, purge API and immutable asset path strategy.

## Deliverables
- `docs/adr/ADR-012-edge-provider.md`.

## Acceptance criteria
- [ ] Static requests do not require API or database health.
- [ ] Purge or revalidation on publication change is specified.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
