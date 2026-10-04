# T05.07 — Media components

| Field      | Value                                                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [05 — Invitation renderer](README.md)                                                                                                                        |
| Status     | `todo`                                                                                                                                                       |
| Priority   | P0 — MVP critical path                                                                                                                                       |
| Depends on | [T05.03](05-03-page-composition.md), [T02.08](../02-invitation-spec/02-08-media-section-schemas.md), [T04.17](../04-design-system/04-17-image-treatments.md) |
| Unblocks   | [T05.19](05-19-renderer-golden-tests.md)                                                                                                                     |
| Docs       | [DESIGN.md](../../DESIGN.md), [ASSETS.md](../../ASSETS.md), [RENDERING.md](../../RENDERING.md)                                                               |

## Goal

Image, video, gallery and music player components.

## Scope

- Responsive images with srcset from asset variants.
- Video with poster, lazy loading, muted autoplay where allowed, controls, reduced-data behavior.
- Accessible gallery with keyboard navigation.
- Music player with explicit control, never required for navigation.

## Deliverables

- `components/{image,video,gallery,music}/*`.

## Acceptance criteria

- [ ] No large media required for initial usability.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Render and keyboard tests.
