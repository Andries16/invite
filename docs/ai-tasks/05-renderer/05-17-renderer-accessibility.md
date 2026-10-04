# T05.17 — Renderer accessibility enforcement

| Field      | Value                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------- |
| Phase      | [05 — Invitation renderer](README.md)                                                               |
| Status     | `todo`                                                                                              |
| Priority   | P0 — MVP critical path                                                                              |
| Depends on | [T05.03](05-03-page-composition.md), [T04.18](../04-design-system/04-18-accessibility-utilities.md) |
| Unblocks   | [T06.13](../06-creator-app/06-13-pre-publish-review.md)                                             |
| Docs       | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)                            |

## Goal

Enforce accessibility in code rather than relying on AI.

## Scope

- Heading order, landmarks, alt text, focus visibility, contrast checks against resolved palette, touch targets.
- Accessibility warnings surfaced to preview.

## Deliverables

- `accessibility/*` checks.

## Acceptance criteria

- [ ] Golden fixtures pass automated axe checks.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Automated accessibility tests.
