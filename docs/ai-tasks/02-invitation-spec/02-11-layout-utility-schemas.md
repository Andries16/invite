# T02.11 — Layout and utility schemas

| Field      | Value                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------ |
| Phase      | [02 — InvitationSpec](README.md)                                                           |
| Status     | `todo`                                                                                     |
| Priority   | P0 — MVP critical path                                                                     |
| Depends on | [T02.05](02-05-section-union-schema.md)                                                    |
| Unblocks   | [T02.16](02-16-domain-validation.md), [T05.11](../05-renderer/05-11-utility-components.md) |
| Docs       | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)                   |

## Goal

LayoutSpec and divider/spacer sections.

## Scope

- Layout primitives: container, stack, row, grid, split, centered, full-bleed, overlay, gallery, timeline.
- Per-breakpoint layout behavior using semantic breakpoints only.
- Divider and spacer with token-based sizes.

## Deliverables

- `v1/layout.ts`, `v1/sections/{divider,spacer}.ts`.

## Acceptance criteria

- [ ] No arbitrary pixel positioning.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests rejecting raw pixel coordinates.
