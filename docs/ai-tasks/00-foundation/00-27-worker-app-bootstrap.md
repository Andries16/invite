# T00.27 — Worker application bootstrap

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T00.21](00-21-queue-package.md), [T00.13](00-13-observability-package.md) |
| Unblocks | [T00.30](00-30-health-checks.md), [T07.21](../07-ai-orchestration/07-21-ai-job-integration.md) |
| Docs | [QUEUES.md](../../QUEUES.md), [ARCHITECTURE.md](../../ARCHITECTURE.md) |

## Goal
Running worker process that consumes queues with typed handlers.

## Scope
- Handler registry per job type.
- Per-queue concurrency configuration.
- Graceful shutdown and job context logging.

## Deliverables
- `apps/worker`.

## Acceptance criteria
- [ ] Worker imports no browser-only creator code.
- [ ] Each handler receives a validated payload.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
