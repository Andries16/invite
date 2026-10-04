# T00.21 — Queue adapter and job envelope

| Field      | Value                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                       |
| Status     | `todo`                                                                                             |
| Priority   | P0 — MVP critical path                                                                             |
| Depends on | [T00.12](00-12-config-package.md), [T00.18](00-18-local-dev-environment.md)                        |
| Unblocks   | [T00.22](00-22-outbox-dispatcher.md), [T00.27](00-27-worker-app-bootstrap.md)                      |
| Docs       | [QUEUES.md](../../QUEUES.md), [ADR-003-async-generation.md](../../adr/ADR-003-async-generation.md) |

## Goal

Replaceable job abstraction with a Redis + BullMQ adapter.

## Scope

- `JobEnvelope` with id, type, version, projectId, payload, attempt, createdAt, correlationId.
- Queues: ai, media, generation, publication, analytics, cleanup.
- Typed job registry mapping job type to payload schema.
- Worker-side payload validation.

## Deliverables

- `packages/queue`.

## Acceptance criteria

- [ ] Invalid payloads are rejected and classified as non-retryable.
- [ ] Queue technology is hidden behind a port.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Integration test enqueue to handler round-trip.
