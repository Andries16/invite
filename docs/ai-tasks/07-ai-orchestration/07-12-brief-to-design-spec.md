# T07.12 — DesignBrief to DesignSpec mapping

| Field | Value |
| --- | --- |
| Phase | [07 — AI orchestration](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T07.11](07-11-design-brief.md), [T04.14](../04-design-system/04-14-theme-contract-registry.md), [T02.12](../02-invitation-spec/02-12-design-spec-schema.md) |
| Unblocks | [T07.13](07-13-initial-spec-generation.md) |
| Docs | [DESIGN_AI.md](../../DESIGN_AI.md), [DESIGN.md](../../DESIGN.md) |

## Goal
Deterministic code converting a DesignBrief into supported DesignSpec values.

## Scope
- Theme family selection, font pairing, palette derivation with contrast checks, motion level mapping.
- Preference precedence from DESIGN_AI.md.

## Deliverables
- `packages/ai/design-mapping/*` (pure code, no model calls).

## Acceptance criteria
- [ ] Output always passes palette contrast and font limits.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests for precedence and mapping.
