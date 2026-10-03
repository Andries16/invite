# T04.01 — Design tokens package

| Field | Value |
| --- | --- |
| Phase | [04 — Design system](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T00.09](../00-foundation/00-09-typescript-strict-config.md) |
| Unblocks | [T04.02](04-02-creator-theme.md), [T04.08](04-08-invitation-layout-primitives.md), [T04.10](04-10-semantic-palette-contrast.md), [T04.11](04-11-typography-font-registry.md), [T04.12](04-12-motion-engine.md), [T04.13](04-13-responsive-system.md), [T04.18](04-18-accessibility-utilities.md), [T09.02](../09-generation-pipeline/09-02-capability-manifest.md) |
| Docs | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md) |

## Goal
Tokenized foundation for both surfaces.

## Scope
- Token groups: color, typography, spacing, radius, elevation, borders, motion, breakpoints, z-index, focus.
- Typed token objects and CSS custom property emitter.

## Deliverables
- `packages/design-system/tokens`.

## Acceptance criteria
- [ ] Tokens are typed constants; emitter output is deterministic.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit test for CSS variable emission.
