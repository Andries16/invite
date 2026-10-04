# T00.22 — Transactional outbox

| Field      | Value                                                                 |
| ---------- | --------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                          |
| Status     | `todo`                                                                |
| Priority   | P1 — MVP / production readiness                                       |
| Depends on | [T00.19](00-19-database-package.md), [T00.21](00-21-queue-package.md) |
| Unblocks   | [T03.10](../03-invitation-domain/03-10-invitation-domain-events.md)   |
| Docs       | [QUEUES.md](../../QUEUES.md), [DATA_MODEL.md](../../DATA_MODEL.md)    |

## Goal

Reliable handoff from committed domain state to queued jobs.

## Scope

- Outbox table/collection written in the same transaction as domain changes.
- Dispatcher that publishes pending events and marks them dispatched.
- At-least-once delivery semantics.

## Deliverables

- Outbox module in `packages/database` and dispatcher in `apps/worker`.

## Acceptance criteria

- [ ] A rolled-back transaction never enqueues a job.
- [ ] A crash after commit still dispatches the job later.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Integration tests for commit, rollback and dispatcher restart.
