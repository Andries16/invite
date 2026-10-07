# ADR 0001: Generation infrastructure

Status: Accepted

## Context

Generation currently validates an ExperienceSpec and creates a deterministic generation plan, but the API job state is process-local. A production deployment requires durable job state, asynchronous worker execution and immutable artifact storage without coupling deterministic generation to infrastructure providers.

The architecture defines PostgreSQL or MongoDB for persistence, Redis + BullMQ for asynchronous work and S3-compatible object storage for generated artifacts. The database and edge provider were intentionally left open until an ADR selected them.

## Decision

Use PostgreSQL as the control-plane persistence store.

Use Redis + BullMQ as the generation queue. The API creates a durable generation job and enqueues a small immutable work payload. The worker owns execution of generation and artifact writing.

Use the provider-neutral ArtifactStore contract in @invite/storage for immutable generated artifacts. The first production adapter may target S3-compatible object storage, but the generator must not depend on an S3 SDK.

Generation identity is derived from the canonical ExperienceSpec content hash. Idempotency is scoped by invitation and idempotency key.

## Boundaries

The API owns authentication, authorization, job creation and job status.

The queue transports generation work but does not contain provider-specific business logic.

The worker validates and executes the deterministic generation plan and writes immutable artifacts.

The artifact store accepts immutable artifacts and never exposes provider-specific storage keys to the public runtime.

The public runtime consumes published immutable artifacts and does not depend on the API, database or queue.

## Failure semantics

A generation retry may safely execute the same content hash more than once. Artifact writes must be immutable and content-addressed so a retry cannot replace a previously published artifact.

A failed generation must not change the currently published artifact.

Job status must distinguish queued, running, failed and succeeded states.

## Migration path

1. Keep the current deterministic generator contract unchanged.
2. Replace the API in-memory job map with a PostgreSQL repository.
3. Replace the in-process execution trigger with BullMQ.
4. Move generation execution to the worker.
5. Write generated files through ArtifactStore.
6. Add publication records and stable public URL resolution.
7. Add observability around job lifecycle, queue latency, generation duration and artifact writes.

## Rejected alternatives

MongoDB is not selected because the generation job and publication state are relational control-plane records with explicit lifecycle and uniqueness constraints.

A direct API-to-worker RPC path is not selected because queue-backed execution provides retry, backpressure and failure isolation.

Provider-specific storage types are not exposed from the generator because that would couple deterministic domain code to infrastructure.
