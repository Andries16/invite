# T03.06 — Invitation API

| Field | Value |
| --- | --- |
| Phase | [03 — Invitation domain](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T03.05](03-05-create-invitation-use-case.md) |
| Unblocks | [T03.07](03-07-apply-patch-use-case.md), [T03.08](03-08-replace-spec-use-case.md), [T03.11](03-11-invitation-deletion.md), [T06.06](../06-creator-app/06-06-invitations-list.md) |
| Docs | [API.md](../../API.md), [DATA_MODEL.md](../../DATA_MODEL.md) |

## Goal
List, read, rename and archive invitations.

## Scope
- Contracts in `packages/contracts/invitations`.
- Paginated list per project with status.
- Read returns current draft spec and revision.

## Deliverables
- Invitations controller.

## Acceptance criteria
- [ ] All endpoints enforce project authorization.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Integration tests including cross-project access attempts.
