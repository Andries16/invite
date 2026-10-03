# T00.23 — Idempotency keys

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T00.19](00-19-database-package.md), [T00.14](00-14-contracts-package.md) |
| Unblocks | — |
| Docs | [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [API.md](../../API.md), [DATA_MODEL.md](../../DATA_MODEL.md) |

## Goal
Idempotency for expensive or side-effecting mutations.

## Scope
- Store key, operation name, request hash, result and expiry.
- Same key with a different request hash returns a conflict.
- Consume key and persist result in one transaction.

## Deliverables
- Idempotency module and API middleware/interceptor.

## Acceptance criteria
- [ ] Repeating a request with the same key returns the stored result.
- [ ] Key maps to the same semantic operation, not only HTTP retries.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit and integration tests for replay, mismatch and expiry.
