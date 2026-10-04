# T04.09 — Invitation content primitives

| Field      | Value                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [04 — Design system](README.md)                                                                                                |
| Status     | `todo`                                                                                                                         |
| Priority   | P0 — MVP critical path                                                                                                         |
| Depends on | [T04.08](04-08-invitation-layout-primitives.md)                                                                                |
| Unblocks   | [T04.17](04-17-image-treatments.md), [T04.21](04-21-component-playground.md), [T05.05](../05-renderer/05-05-hero-component.md) |
| Docs       | [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)                                                                                     |

## Goal

Media, Text, Button and Card primitives.

## Scope

- Media: responsive images with srcset, lazy loading, aspect ratio boxes, alt text.
- Text: typographic roles from theme.
- Button: 44x44 minimum touch target.

## Deliverables

- Primitives in `invitation-primitives`.

## Acceptance criteria

- [ ] Images reserve space to avoid layout shift.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Render and accessibility tests.
