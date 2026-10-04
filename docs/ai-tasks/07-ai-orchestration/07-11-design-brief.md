# T07.11 — DesignBrief generation

| Field      | Value                                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                                                                   |
| Status     | `todo`                                                                                                               |
| Priority   | P0 — MVP critical path                                                                                               |
| Depends on | [T07.09](07-09-fact-extraction.md)                                                                                   |
| Unblocks   | [T07.12](07-12-brief-to-design-spec.md)                                                                              |
| Docs       | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [DESIGN_AI.md](../../DESIGN_AI.md), [DESIGN.md](../../DESIGN.md) |

## Goal

Build a compact DesignBrief before design values.

## Scope

- Emotional intent, visual keywords, avoid list, typography/color/imagery direction, motion level, interaction level.
- Never infer sensitive personal attributes.

## Deliverables

- `packages/ai/design-brief/*`.

## Acceptance criteria

- [ ] Output validates against the DesignBrief schema.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
