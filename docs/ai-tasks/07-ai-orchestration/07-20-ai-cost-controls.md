# T07.20 — AI cost controls

| Field | Value |
| --- | --- |
| Phase | [07 — AI orchestration](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T07.02](07-02-ai-provider-adapter.md) |
| Unblocks | — |
| Docs | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [OPERATIONS.md](../../OPERATIONS.md) |

## Goal
Model selection policy, limits, timeouts, retries, rate limits and budget accounting.

## Scope
- Per-user and per-project rate limits.
- Usage recorded per call.

## Deliverables
- `packages/ai/budget/*` and usage repository.

## Acceptance criteria
- [ ] Exceeding budget returns `RATE_LIMITED` with a recoverable UI state.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
