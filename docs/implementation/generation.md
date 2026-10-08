# Generation implementation

The generation boundary follows the project architecture: a validated ExperienceSpec is converted into a deterministic generation plan, while publication remains a separate concern.

## Current implementation

- `@invite/invitation-generator` validates the ExperienceSpec through the shared runtime validator.
- Generation produces an immutable-style artifact manifest containing the experience, schema version, generator version, ordered scene IDs and deduplicated media IDs.
- `POST /invitations/:invitationId/generations` returns HTTP 202 and creates a generation job.
- `GET /generation-jobs/:jobId` exposes the job state.
- `@invite/generation-persistence` owns the provider-neutral job and invitation-scoped idempotency repository contracts.
- `@invite/generation-queue` owns the immutable generation work payload and canonical `invite.generation` queue name.
- `@invite/generation-persistence-postgres` provides PostgreSQL SQL adapters and the initial control-plane migration.
- `@invite/generation-queue-bullmq` provides the BullMQ queue adapter without coupling the queue contract to the provider SDK.
- The API currently uses in-memory repository and queue adapters as transitional composition-root implementations.
- Generation requests support invitation-scoped idempotency keys, and artifact identity uses canonicalized ExperienceSpec content.
- `@invite/storage` is reserved for immutable artifact storage and does not own generation job state.

## Deliberate limitation

The production adapters are implemented behind provider-neutral contracts, but the API composition root still uses the in-memory adapters. The worker has not yet been switched to consume Redis/BullMQ work.

The next production wiring step is to inject a PostgreSQL client into `PostgresGenerationJobRepository` and `PostgresGenerationIdempotencyRepository`, inject a BullMQ Queue into `BullMqGenerationQueue`, and move queued execution into `apps/worker`.

## Invariants

1. Invalid ExperienceSpec values never enter generation.
2. AI is not called by the deterministic generator.
3. Generation does not publish directly.
4. The same validated specification produces the same generation manifest.
5. Public serving remains independent from generation availability.
6. Job persistence and queue transport are accessed through provider-neutral contracts.
7. Infrastructure adapters do not change the deterministic generator contract.
