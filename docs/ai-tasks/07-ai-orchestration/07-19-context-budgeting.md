# T07.19 — Context summarization and budgeting

| Field      | Value                                                                          |
| ---------- | ------------------------------------------------------------------------------ |
| Phase      | [07 — AI orchestration](README.md)                                             |
| Status     | `todo`                                                                         |
| Priority   | P1 — MVP / production readiness                                                |
| Depends on | [T07.04](07-04-conversation-entity.md), [T07.07](07-07-prompt-architecture.md) |
| Unblocks   | —                                                                              |
| Docs       | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md)                             |

## Goal

Use structured state and summaries instead of unlimited raw history.

## Deliverables

- `packages/ai/context/*`.

## Acceptance criteria

- [ ] Requests stay within configured token limits for long conversations.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
