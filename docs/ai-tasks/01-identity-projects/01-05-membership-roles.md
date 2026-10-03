# T01.05 — Memberships and roles

| Field | Value |
| --- | --- |
| Phase | [01 — Identity and projects](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T01.01](01-01-user-entity.md), [T01.04](01-04-project-entity.md) |
| Unblocks | [T01.06](01-06-authorization-guard.md) |
| Docs | [DATA_MODEL.md](../../DATA_MODEL.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md) |

## Goal
Connect users to projects with owner, editor and viewer roles.

## Scope
- Membership entity with role and timestamps.
- Permission matrix per role and action.
- Invariant: a project always has at least one owner.

## Deliverables
- `packages/domain/membership`, permission matrix, migration.

## Acceptance criteria
- [ ] Removing the last owner is rejected.
- [ ] Permission matrix is a typed, exhaustive mapping.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests for every role/action pair.
