# T04.08 — Invitation layout primitives

| Field      | Value                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| Phase      | [04 — Design system](README.md)                                                                              |
| Status     | `todo`                                                                                                       |
| Priority   | P0 — MVP critical path                                                                                       |
| Depends on | [T04.01](04-01-design-tokens.md), [T04.13](04-13-responsive-system.md)                                       |
| Unblocks   | [T04.09](04-09-invitation-content-primitives.md), [T05.01](../05-renderer/05-01-runtime-package-scaffold.md) |
| Docs       | [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md), [DESIGN.md](../../DESIGN.md)                                     |

## Goal

Container, Section, Stack, Grid, Split, Overlay, FullBleed, Divider and Spacer.

## Scope

- Behavior defined per semantic breakpoint.
- No horizontal overflow at any breakpoint.

## Deliverables

- `packages/design-system/invitation-primitives/*`.

## Acceptance criteria

- [ ] Primitives render semantic HTML and accept only token-based spacing.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Render tests at each breakpoint.
