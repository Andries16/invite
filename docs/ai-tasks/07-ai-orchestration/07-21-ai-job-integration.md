# T07.21 — Async AI jobs

| Field | Value |
| --- | --- |
| Phase | [07 — AI orchestration](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T07.13](07-13-initial-spec-generation.md), [T00.27](../00-foundation/00-27-worker-app-bootstrap.md) |
| Unblocks | [T07.22](07-22-conversation-api.md), [T07.27](07-27-provider-outage.md) |
| Docs | [ADR-003-async-generation.md](../../adr/ADR-003-async-generation.md), [QUEUES.md](../../QUEUES.md) |

## Goal
Run AI turns as jobs on the ai queue.

## Scope
- API enqueues a turn and returns a job ID.
- Worker runs orchestration and persists results.
- Status streaming to the creator.

## Deliverables
- AI turn job handler and endpoints.

## Acceptance criteria
- [ ] HTTP requests never wait on model calls.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
