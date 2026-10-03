# T04.12 — Motion engine

| Field | Value |
| --- | --- |
| Phase | [04 — Design system](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T04.01](04-01-design-tokens.md) |
| Unblocks | [T04.14](04-14-theme-contract-registry.md), [T05.10](../05-renderer/05-10-emotional-interactions.md), [T05.12](../05-renderer/05-12-motion-integration.md) |
| Docs | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md) |

## Goal
Semantic motion primitives scaled by motion level.

## Scope
- Levels: none, subtle, moderate, expressive, cinematic.
- Primitives: fade, reveal, slide, scale, parallax, stagger, blur reveal, type-on, morph, floating, scroll-linked.
- `prefers-reduced-motion` removes or reduces non-essential motion.
- CSS-first implementation; JavaScript only where required.

## Deliverables
- `packages/design-system/motion`.

## Acceptance criteria
- [ ] Reduced motion overrides expressive motion.
- [ ] Motion never blocks content visibility.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests for level scaling and reduced-motion resolution.
