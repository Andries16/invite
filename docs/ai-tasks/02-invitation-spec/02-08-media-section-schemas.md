# T02.08 — Media section schemas

| Field      | Value                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------- |
| Phase      | [02 — InvitationSpec](README.md)                                                         |
| Status     | `todo`                                                                                   |
| Priority   | P0 — MVP critical path                                                                   |
| Depends on | [T02.05](02-05-section-union-schema.md), [T02.14](02-14-asset-reference-schema.md)       |
| Unblocks   | [T02.16](02-16-domain-validation.md), [T05.07](../05-renderer/05-07-media-components.md) |
| Docs       | [DESIGN.md](../../DESIGN.md), [ASSETS.md](../../ASSETS.md)                               |

## Goal

Image, video, gallery and music player sections.

## Scope

- Image with alt text required and treatment.
- Video with poster, autoplay muted flag, controls, captions reference.
- Gallery with layout variant and item limits.
- Music player with explicit control and no autoplay with sound.

## Deliverables

- `v1/sections/{image,video,gallery,music}.ts`.

## Acceptance criteria

- [ ] Images without alt text fail validation unless marked decorative.
- [ ] Music cannot be configured to autoplay with sound.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests per section.
