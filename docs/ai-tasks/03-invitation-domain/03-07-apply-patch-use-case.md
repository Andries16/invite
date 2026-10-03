# T03.07 — ApplyInvitationPatch use case

| Field | Value |
| --- | --- |
| Phase | [03 — Invitation domain](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T03.06](03-06-invitation-api.md), [T02.20](../02-invitation-spec/02-20-spec-patch-operations.md) |
| Unblocks | [T03.09](03-09-version-history.md), [T07.14](../07-ai-orchestration/07-14-nl-edit-to-patch.md), [T07.16](../07-ai-orchestration/07-16-ai-tools.md) |
| Docs | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md) |

## Goal
Apply validated structured patches creating a new draft version.

## Scope
- Input: invitationId, expected revision, patch operations, source (user, ai).
- Runs full validation pipeline from T02.20.
- Persists new version and bumps revision in one transaction.

## Deliverables
- Application service and endpoint.

## Acceptance criteria
- [ ] Stale revision returns `VERSION_CONFLICT`.
- [ ] Invalid patch persists nothing.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Integration tests for success, conflict and invalid patch.
