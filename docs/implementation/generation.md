# Generation implementation

The generation boundary follows the project architecture: a validated ExperienceSpec is converted into a deterministic generation plan, while publication remains a separate concern.

## Current implementation

- `@invite/invitation-generator` validates the ExperienceSpec through the shared runtime validator.
- Generation produces an immutable-style artifact manifest containing the experience, schema version, generator version, ordered scene IDs and deduplicated media IDs.
- `POST /invitations/:invitationId/generations` returns HTTP 202 and creates a generation job.
- `GET /generation-jobs/:jobId` exposes the job state.
- Generation job persistence is accessed through `@invite/storage`'s provider-neutral `GenerationJobStore<TPlan>` contract.
- The API currently supplies an in-memory adapter behind that contract; a durable database adapter can replace it without changing the generation service contract.
- Generation requests support invitation-scoped idempotency keys, and artifact identity uses canonicalized ExperienceSpec content.

## Deliberate limitation

The current API job store is in-memory and the worker is not connected to Redis/BullMQ yet. It is a control-plane foundation, not the final production job infrastructure. The storage boundary deliberately isolates that limitation from the generation domain.

The production path must replace the in-memory store with durable persistence and add a queue adapter without changing the deterministic generator contract.

## Invariants

1. Invalid ExperienceSpec values never enter generation.
2. AI is not called by the deterministic generator.
3. Generation does not publish directly.
4. The same validated specification produces the same generation manifest.
5. Public serving remains independent from generation availability.
6. Job persistence is accessed through a provider-neutral storage contract.
