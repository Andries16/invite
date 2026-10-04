# T03.04 — Slug generation and validation

| Field      | Value                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [03 — Invitation domain](README.md)                                                                                                                  |
| Status     | `todo`                                                                                                                                               |
| Priority   | P0 — MVP critical path                                                                                                                               |
| Depends on | [T03.01](03-01-invitation-entity.md), [T00.06](../00-foundation/00-06-adr-public-url-convention.md)                                                  |
| Unblocks   | [T03.05](03-05-create-invitation-use-case.md)                                                                                                        |
| Docs       | [PUBLIC_DELIVERY.md](../../PUBLIC_DELIVERY.md), [invitations.md](../../domains/invitations.md), [domain-routing.md](../../domains/domain-routing.md) |

## Goal

URL-safe, readable, unique, non-sensitive slugs.

## Scope

- Generator not derived from private information by default.
- Reserved words list (www, api, admin, app, ...).
- Uniqueness within the namespace decided in T00.06.
- Change allowed before publication; immutable after publication by default.

## Deliverables

- Slug domain service and validation schema.

## Acceptance criteria

- [ ] Reserved and malformed slugs are rejected.
- [ ] Slug change after publication is rejected unless explicitly supported.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests including unicode and collision cases.
