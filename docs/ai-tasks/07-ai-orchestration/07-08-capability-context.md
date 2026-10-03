# T07.08 — Capability manifest in AI context

| Field | Value |
| --- | --- |
| Phase | [07 — AI orchestration](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T07.07](07-07-prompt-architecture.md), [T04.19](../04-design-system/04-19-capability-manifest.md) |
| Unblocks | — |
| Docs | [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md), [DESIGN_AI.md](../../DESIGN_AI.md) |

## Goal
Provide the current capability manifest to the model.

## Deliverables
- Manifest serializer for prompts.

## Acceptance criteria
- [ ] AI cannot request capabilities outside the manifest; validation enforces it.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
