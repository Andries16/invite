# T02.12 — DesignSpec schema

| Field | Value |
| --- | --- |
| Phase | [02 — InvitationSpec](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T02.02](02-02-primitive-value-schemas.md) |
| Unblocks | [T02.16](02-16-domain-validation.md), [T07.12](../07-ai-orchestration/07-12-brief-to-design-spec.md) |
| Docs | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md), [DESIGN_AI.md](../../DESIGN_AI.md) |

## Goal
Serializable, versioned design representation.

## Scope
- ThemeSpec (theme family and version), TypographySpec, PaletteSpec (semantic roles), SpacingSpec, MotionSpec (level and primitives), ImagerySpec (treatments).
- References to design tokens, never raw CSS.

## Deliverables
- `v1/design/*` schemas.

## Acceptance criteria
- [ ] Raw CSS strings are rejected.
- [ ] Motion level is one of none, subtle, moderate, expressive, cinematic.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests per sub-schema.
