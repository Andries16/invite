# T00.30 — Liveness and readiness checks

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T00.25](00-25-api-app-bootstrap.md), [T00.27](00-27-worker-app-bootstrap.md) |
| Unblocks | — |
| Docs | [OPERATIONS.md](../../OPERATIONS.md) |

## Goal
Health endpoints for API and worker.

## Scope
- Liveness independent of slow external providers.
- Readiness checking only dependencies required to serve traffic.

## Deliverables
- Health modules in API and worker.

## Acceptance criteria
- [ ] AI provider outage does not fail liveness.
- [ ] Database outage fails API readiness.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
