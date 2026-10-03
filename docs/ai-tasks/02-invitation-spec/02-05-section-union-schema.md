# T02.05 — Section discriminated union

| Field | Value |
| --- | --- |
| Phase | [02 — InvitationSpec](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T02.04](02-04-content-model-schema.md) |
| Unblocks | [T02.06](02-06-hero-section-schema.md), [T02.07](02-07-narrative-section-schemas.md), [T02.08](02-08-media-section-schemas.md), [T02.09](02-09-event-section-schemas.md), [T02.10](02-10-interactive-section-schemas.md), [T02.11](02-11-layout-utility-schemas.md) |
| Docs | [DESIGN.md](../../DESIGN.md), [RENDERING.md](../../RENDERING.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md) |

## Goal
`Section` as a discriminated union on `type` with id, layout, content, style and motion.

## Scope
- Base section fields: id, type, layout, style, motion, responsive overrides by semantic breakpoint.
- Union assembled from per-type schemas defined in T02.06–T02.11.
- Unknown section types fail validation.

## Deliverables
- `v1/sections/section.ts` and union index.

## Acceptance criteria
- [ ] Exhaustive `switch` on section type compiles only when all types are handled.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit test rejecting unknown section types.
