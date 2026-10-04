# T02.18 — Spec normalization

| Field      | Value                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------- |
| Phase      | [02 — InvitationSpec](README.md)                                                              |
| Status     | `todo`                                                                                        |
| Priority   | P0 — MVP critical path                                                                        |
| Depends on | [T02.16](02-16-domain-validation.md)                                                          |
| Unblocks   | [T02.19](02-19-canonical-hash.md), [T05.01](../05-renderer/05-01-runtime-package-scaffold.md) |
| Docs       | [GENERATION.md](../../GENERATION.md), [RENDERING.md](../../RENDERING.md)                      |

## Goal

Canonicalize specs before rendering and hashing.

## Scope

- Colors to a canonical format.
- Locales and time zones canonicalized.
- Dates to UTC plus explicit zone.
- Defaults filled from a versioned defaults table.
- Stable ordering where order is not semantic.

## Deliverables

- `normalize.ts`.

## Acceptance criteria

- [ ] Normalization is idempotent.
- [ ] Normalization never removes user content.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Property tests for idempotency.
