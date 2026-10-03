# T06.12 — Generation progress UI

| Field | Value |
| --- | --- |
| Phase | [06 — Creator application](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T06.07](06-07-studio-layout.md), [T09.02](../09-generation-pipeline/09-02-capability-manifest.md) |
| Unblocks | — |
| Docs | [QUEUES.md](../../QUEUES.md), [API.md](../../API.md) |

## Goal
Show coarse job progress and failures.

## Scope
- Polling or server-sent events for job status.
- Recoverable failure state with retry.

## Deliverables
- `features/studio/generation/*`.

## Acceptance criteria
- [ ] Progress is informational and never blocks editing.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
