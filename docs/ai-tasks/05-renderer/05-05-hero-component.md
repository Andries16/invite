# T05.05 — Hero component

| Field      | Value                                                                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [05 — Invitation renderer](README.md)                                                                                                                                   |
| Status     | `todo`                                                                                                                                                                  |
| Priority   | P0 — MVP critical path                                                                                                                                                  |
| Depends on | [T05.03](05-03-page-composition.md), [T02.06](../02-invitation-spec/02-06-hero-section-schema.md), [T04.09](../04-design-system/04-09-invitation-content-primitives.md) |
| Unblocks   | [T05.19](05-19-renderer-golden-tests.md)                                                                                                                                |
| Docs       | [DESIGN.md](../../DESIGN.md)                                                                                                                                            |

## Goal

Hero implementation for every supported variant.

## Scope

- All variants from T02.06, mobile-first.
- Critical content first; media lazy except LCP image.

## Deliverables

- `components/hero/*`, one file per variant where large.

## Acceptance criteria

- [ ] Usable on mobile for every variant.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Render tests per variant.
