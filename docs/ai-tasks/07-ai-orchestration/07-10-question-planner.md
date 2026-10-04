# T07.10 — Question strategy and stop condition

| Field      | Value                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                                                               |
| Status     | `todo`                                                                                                           |
| Priority   | P0 — MVP critical path                                                                                           |
| Depends on | [T07.09](07-09-fact-extraction.md), [T07.06](07-06-interaction-protocol.md)                                      |
| Unblocks   | [T07.13](07-13-initial-spec-generation.md)                                                                       |
| Docs       | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [PRODUCT.md](../../PRODUCT.md), [DESIGN.md](../../DESIGN.md) |

## Goal

Ask only high-information questions and stop when enough exists.

## Scope

- Required-information model per invitation type in code.
- Model chooses next interaction block; code enforces maximum questions per turn.
- Prefer choice cards for creative decisions.

## Deliverables

- `packages/ai/planner/*`.

## Acceptance criteria

- [ ] No giant forms; at most one primary question per turn.
- [ ] Conversation can reach a ready state without optional details.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Evaluation fixtures for question categories.
