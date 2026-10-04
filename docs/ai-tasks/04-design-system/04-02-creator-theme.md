# T04.02 — Creator visual theme

| Field      | Value                                                                                                                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [04 — Design system](README.md)                                                                                                                                                                                               |
| Status     | `todo`                                                                                                                                                                                                                        |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                        |
| Depends on | [T04.01](04-01-design-tokens.md)                                                                                                                                                                                              |
| Unblocks   | [T04.03](04-03-creator-input-components.md), [T06.01](../06-creator-app/06-01-creator-shell-routing.md), [T09.02](../09-generation-pipeline/09-02-capability-manifest.md), [T15.03](../15-testing/15-03-visual-regression.md) |
| Docs       | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)                                                                                                                                                      |

## Goal

Calm, premium creator theme built on tokens.

## Scope

- Modern sans-serif typography hierarchy: display, heading, subheading, body, label, caption, metadata.
- Light theme and optional dark theme.
- MUI theme mapping or custom theme per ARCHITECTURE.md stack decision.

## Deliverables

- `packages/design-system/creator-theme`.

## Acceptance criteria

- [ ] Feature code uses theme tokens, not arbitrary visual values.
- [ ] Body text meets WCAG AA contrast.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
