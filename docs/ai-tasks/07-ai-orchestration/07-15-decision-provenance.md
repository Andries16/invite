# T07.15 — Decision provenance and precedence

| Field      | Value                                                                                  |
| ---------- | -------------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                                     |
| Status     | `todo`                                                                                 |
| Priority   | P0 — MVP critical path                                                                 |
| Depends on | [T07.09](07-09-fact-extraction.md)                                                     |
| Unblocks   | —                                                                                      |
| Docs       | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [DESIGN_AI.md](../../DESIGN_AI.md) |

## Goal

Track the source of every important decision and enforce precedence.

## Scope

- Provenance map keyed by spec path.
- Guard rejecting AI patches that override explicit user decisions without an explicit request.

## Deliverables

- `packages/ai/provenance/*`.

## Acceptance criteria

- [ ] Explicit decisions have highest precedence in code, not only in prompts.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
