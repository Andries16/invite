# T05.03 — Page composition and section renderer

| Field | Value |
| --- | --- |
| Phase | [05 — Invitation renderer](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T05.02](05-02-component-registry.md) |
| Unblocks | [T05.05](05-05-hero-component.md), [T05.06](05-06-narrative-components.md), [T05.07](05-07-media-components.md), [T05.08](05-08-event-components.md), [T05.09](05-09-interactive-components.md), [T05.11](05-11-utility-components.md), [T05.12](05-12-motion-integration.md), [T05.15](05-15-determinism-guards.md), [T05.16](05-16-seo-metadata.md), [T05.17](05-17-renderer-accessibility.md), [T05.18](05-18-renderer-performance.md) |
| Docs | [RENDERING.md](../../RENDERING.md), [DESIGN.md](../../DESIGN.md) |

## Goal
Render ordered sections with layout, style and motion wrappers.

## Scope
- Section wrapper applying layout primitives, theme tokens and motion.
- Semantic landmarks and heading hierarchy.
- Error boundary per section in preview mode only.

## Deliverables
- `page/*`.

## Acceptance criteria
- [ ] Exactly one `h1` per invitation page.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
