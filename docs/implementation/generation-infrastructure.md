# Generation infrastructure adapters

The API now contains first-pass PostgreSQL and BullMQ adapter boundaries. These adapters are deliberately injected with driver-compatible objects; neither the deterministic generator nor the persistence contracts import a vendor SDK.

## PostgreSQL

Apply `apps/api/src/infrastructure/generation-schema.sql` before enabling the repositories. The schema persists generation state and enforces uniqueness for the pair `(invitation_id, idempotency_key)`.

- `PostgresGenerationJobRepository` implements job creation, lookup, and state updates.
- `PostgresGenerationIdempotencyRepository` implements invitation-scoped idempotency lookup and insertion.
- Both `create` and `createIdempotent` now persist the generation job and a `generation.requested` outbox event in one PostgreSQL transaction. The idempotent variant also inserts the invitation-scoped idempotency row in that same transaction.
- The outbox event contains the immutable job payload needed by a future dispatcher. This closes the database-commit/queue-enqueue loss window at the write boundary: a committed job always has a committed outbox row.
- `PostgresGenerationOutboxRepository` now provides atomic batch leasing with `FOR UPDATE SKIP LOCKED`, stale-lease recovery, and explicit dispatched/failed transitions. The repository is not yet wired to a running dispatcher or scheduler, so committed events remain pending until that runtime integration exists.
- Callers must still handle a unique-key violation by reading the existing idempotency record and comparing its content hash.

The repository constructors accept a small structural SQL interface, so the API can provide a `pg` pool without leaking the driver into domain contracts.

## Redis / BullMQ

`BullMqGenerationQueue` implements the `GenerationQueue` contract. It uses the generation job ID as BullMQ's stable `jobId`, configures bounded retries with exponential backoff, and retains completed/failed queue records for operational inspection.

Stable IDs prevent duplicate queue entries while a BullMQ record exists; they do **not** make a retained completed or failed job executable again. A future recovery/retry workflow must inspect the existing BullMQ job state and deliberately remove/recreate or otherwise re-arm the queue record before re-enqueueing. Do not rely on calling `add` again with the same retained ID to recover a job.

The constructor accepts a structural subset of BullMQ's `Queue` API so the adapter package remains independent of the vendor SDK.

## Remaining integration work

These are adapter implementations, not yet the default runtime wiring. Before production use:

1. Add and configure PostgreSQL and BullMQ/Redis clients from validated environment configuration.
2. Replace the in-memory `GenerationService` maps with repository-backed async operations.
3. Wire `PostgresGenerationOutboxRepository` into a continuously running dispatcher: claim batches, publish to BullMQ, mark successful deliveries dispatched, and schedule failed deliveries with bounded backoff. Recover stale `processing` leases after process crashes; delivery is at-least-once and consumers must be idempotent.
4. Add a worker that claims queued jobs, runs `planGeneration`, and persists terminal status.
5. Add integration tests against PostgreSQL and Redis, including concurrent idempotency-key races, rollback behavior, duplicate enqueue, worker retry, retained-job recovery, and restart recovery.
6. Complete outbox dispatch/reconciliation and monitor the age/count of pending events so a crash between database commit and queue enqueue cannot leave a queued job undispatched indefinitely.

The deterministic generator contract remains unchanged.
