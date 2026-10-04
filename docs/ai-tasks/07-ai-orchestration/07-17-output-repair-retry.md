# T07.17 — Validation, bounded repair and retry

| Field      | Value                                                                            |
| ---------- | -------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                               |
| Status     | `todo`                                                                           |
| Priority   | P0 — MVP critical path                                                           |
| Depends on | [T07.13](07-13-initial-spec-generation.md)                                       |
| Unblocks   | —                                                                                |
| Docs       | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [QUEUES.md](../../QUEUES.md) |

## Goal

Handle invalid AI output safely.

## Scope

- Validate, attempt bounded repair with structured error feedback, retry within limits, then recoverable state.
- Never publish or persist invalid output.

## Deliverables

- `packages/ai/reliability/*`.

## Acceptance criteria

- [ ] Retries are bounded and recorded.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Tests with fake provider returning invalid output.
