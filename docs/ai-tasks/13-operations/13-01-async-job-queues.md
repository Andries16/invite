# T13.01 — Implement Async Job Queues

| Field      | Value                                                              |
| ---------- | ------------------------------------------------------------------ |
| Phase      | [13 — Operations & Queues](README.md)                              |
| Status     | `todo`                                                             |
| Priority   | P0 — MVP critical path                                             |
| Depends on | [T12.03](../12-infrastructure/12-03-setup-caching.md)              |
| Unblocks   | [T12.04](../12-infrastructure/12-04-configure-workers.md)          |
| Docs       | [OPERATIONS.md](../../OPERATIONS.md), [QUEUES.md](../../QUEUES.md) |

## Goal

Set up the queuing system to handle background tasks like AI generation, media transcoding, and builds.

## Scope

- BullMQ or SQS setup.
- Job producers and consumers.

## Deliverables

- Queue management and worker services.

## Acceptance criteria

- [ ] Background jobs are executed reliably with retries and dead-letter queues.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
