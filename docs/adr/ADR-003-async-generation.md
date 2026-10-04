# ADR-003: Asynchronous Generation

Status: Proposed

## Context

AI calls, media processing and builds can take substantial time and fail independently.

## Decision

Use durable asynchronous jobs for generation and media processing.

## Consequences

The UI needs job state/progress. Workers scale independently. Retries and idempotency are mandatory.
