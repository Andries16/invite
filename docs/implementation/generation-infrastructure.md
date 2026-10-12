# Generation infrastructure adapters

The API now contains first-pass PostgreSQL and BullMQ adapter boundaries. These adapters are deliberately injected with driver-compatible objects; neither the deterministic generator nor the persistence contracts import a vendor SDK.

## PostgreSQL

Apply `apps/api/src/infrastructure/generation-schema.sql` before enabling the repositories. The schema persists generation state and enforces uniqueness for the pair `(invitation_id, idempotency_key)`.

- `PostgresGenerationJobRepository` implements job creation, lookup, and state updates.
- `PostgresGenerationIdempotencyRepository` implements invitation-scoped idempotency lookup and insertion.
- `createIdempotent` persists the job and idempotency row in one transaction. Callers must handle a unique-key violation by reading the existing idempotency record and comparing its content hash.

The repository constructors accept a small structural SQL interface, so the API can provide a `pg` pool without leaking the driver into domain contracts.

## Redis / BullMQ

`BullMqGenerationQueue` implements the `GenerationQueue` contract. It uses the generation job ID as BullMQ's stable `jobId`, configures bounded retries with exponential backoff, and retains completed/failed queue records for operational inspection.

The constructor accepts a structural subset of BullMQ's `Queue` API so the adapter package remains independent of the vendor SDK.

## Remaining integration work

These are adapter implementations, not yet the default runtime wiring. Before production use:

1. Add and configure PostgreSQL and BullMQ/Redis clients from validated environment configuration.
2. Replace the in-memory `GenerationService` maps with repository-backed async operations.
3. Persist the job before enqueueing; on enqueue failure, keep the durable job queued and allow a safe retry.
4. Add a worker that claims queued jobs, runs `planGeneration`, and persists terminal status.
5. Add integration tests against PostgreSQL and Redis, including concurrent idempotency-key races, rollback behavior, duplicate enqueue, worker retry, and restart recovery.

The deterministic generator contract remains unchanged.
