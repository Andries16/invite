# T01.10 — Account and project deletion lifecycle

| Field | Value |
| --- | --- |
| Phase | [01 — Identity and projects](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T01.07](01-07-project-api.md), [T01.09](01-09-audit-log.md) |
| Unblocks | — |
| Docs | [DATA_MODEL.md](../../DATA_MODEL.md), [DATA.md](../../DATA.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md) |

## Goal
Lifecycle-aware deletion of users and projects.

## Scope
- Soft-delete then asynchronous cleanup job.
- Unpublish invitations, revoke public access, schedule artifact and asset deletion, delete conversations per retention.
- Retain required audit metadata.

## Deliverables
- Deletion use cases and cleanup job.

## Acceptance criteria
- [ ] No private assets remain orphaned after cleanup completes.
- [ ] Deletion is idempotent.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Integration test covering the full cleanup graph.
