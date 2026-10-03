# T03.11 — Invitation deletion lifecycle

| Field | Value |
| --- | --- |
| Phase | [03 — Invitation domain](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T03.06](03-06-invitation-api.md), [T01.09](../01-identity-projects/01-09-audit-log.md) |
| Unblocks | — |
| Docs | [DATA_MODEL.md](../../DATA_MODEL.md), [DATA.md](../../DATA.md) |

## Goal
Lifecycle-aware invitation deletion.

## Scope
- Unpublish, revoke public access, retain audit metadata, schedule artifact deletion, release asset references, delete conversations per retention.
- Asynchronous cleanup job.

## Deliverables
- Delete use case and cleanup job.

## Acceptance criteria
- [ ] Deleted invitation URLs return a controlled not-found response.
- [ ] Cleanup is idempotent.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Integration test for the deletion graph.
