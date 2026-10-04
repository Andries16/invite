# T04.03 — Creator input components

| Field      | Value                                                                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [04 — Design system](README.md)                                                                                                                                                   |
| Status     | `todo`                                                                                                                                                                            |
| Priority   | P0 — MVP critical path                                                                                                                                                            |
| Depends on | [T04.02](04-02-creator-theme.md), [T00.17](../00-foundation/00-17-translations-package.md)                                                                                        |
| Unblocks   | [T04.04](04-04-creator-choice-components.md), [T04.05](04-05-creator-overlay-components.md), [T04.06](04-06-creator-state-components.md), [T04.21](04-21-component-playground.md) |
| Docs       | [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)                                                                                                                                        |

## Goal

Button, IconButton, Input, Textarea, Select and Autocomplete.

## Scope

- Keyboard and focus behavior.
- Labels and error messages through translation keys.
- Loading and disabled states.

## Deliverables

- `packages/design-system/creator-components/*`, one component per file.

## Acceptance criteria

- [ ] All interactive components are keyboard operable with visible focus.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Component tests with accessibility assertions.
