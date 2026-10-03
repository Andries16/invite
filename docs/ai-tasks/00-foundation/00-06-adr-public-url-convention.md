# T00.06 — ADR: single and campaign public URL convention

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T00.01](00-01-resolve-documentation-conflicts.md) |
| Unblocks | [T00.07](00-07-adr-edge-provider.md), [T03.04](../03-invitation-domain/03-04-slug-service.md) |
| Docs | [PUBLIC_DELIVERY.md](../../PUBLIC_DELIVERY.md), [PRODUCT.md](../../PRODUCT.md), [domain-routing.md](../../domains/domain-routing.md), [ADR-004-stable-public-urls.md](../../adr/ADR-004-stable-public-urls.md), [README.md](../../adr/README.md) |

## Goal
Choose the canonical public URL format for single invitations and campaign recipients.

## Scope
- Single invitation: subdomain (`maria.invite.md`) versus path (`invite.md/i/:slug`).
- Campaign: `<campaign>.<recipient>.invite.md` versus `<campaign>.invite.md/<recipient>` versus token paths.
- Evaluate wildcard DNS and certificates, caching, privacy, analytics, usability and QR length.
- Define reserved slugs and slug namespace rules.

## Deliverables
- `docs/adr/ADR-011-public-url-convention.md`.
- PUBLIC_DELIVERY.md and domain-routing.md updated to match.

## Acceptance criteria
- [ ] One canonical format for each case.
- [ ] Recipient URLs cannot be enumerated to access other recipients.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
