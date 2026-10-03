# T04.10 — Semantic palette and contrast utilities

| Field | Value |
| --- | --- |
| Phase | [04 — Design system](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T04.01](04-01-design-tokens.md) |
| Unblocks | [T04.14](04-14-theme-contract-registry.md) |
| Docs | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md), [DESIGN_AI.md](../../DESIGN_AI.md) |

## Goal
Semantic color roles with WCAG contrast validation.

## Scope
- Roles: primary, secondary, background, surface, text, mutedText, accent, border, success, error.
- Contrast ratio calculator and role-pair rules.
- Palette derivation helpers from a seed color.

## Deliverables
- `packages/design-system/palette`.

## Acceptance criteria
- [ ] Contradictory or low-contrast palettes are reported.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests for contrast math and pair rules.
