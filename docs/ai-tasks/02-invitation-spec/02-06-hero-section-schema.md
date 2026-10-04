# T02.06 — Hero section schema

| Field      | Value                                                                                  |
| ---------- | -------------------------------------------------------------------------------------- |
| Phase      | [02 — InvitationSpec](README.md)                                                       |
| Status     | `todo`                                                                                 |
| Priority   | P0 — MVP critical path                                                                 |
| Depends on | [T02.05](02-05-section-union-schema.md)                                                |
| Unblocks   | [T02.16](02-16-domain-validation.md), [T05.05](../05-renderer/05-05-hero-component.md) |
| Docs       | [DESIGN.md](../../DESIGN.md)                                                           |

## Goal

Hero section with supported variants.

## Scope

- Variants: full-screen-image, cinematic-video, typography-only, split, centered-editorial, animated-gradient, collage, invitation-card, interactive-reveal.
- Variant-specific required fields (e.g. asset for image variants).

## Deliverables

- `v1/sections/hero.ts`.

## Acceptance criteria

- [ ] Each variant validates its required content.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests per variant.
