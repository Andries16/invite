# T03.05 — CreateInvitation use case

| Field | Value |
| --- | --- |
| Phase | [03 — Invitation domain](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T03.03](03-03-invitation-repositories.md), [T03.04](03-04-slug-service.md), [T01.06](../01-identity-projects/01-06-authorization-guard.md) |
| Unblocks | [T03.06](03-06-invitation-api.md), [T03.10](03-10-invitation-domain-events.md) |
| Docs | [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [API.md](../../API.md) |

## Goal
Create an invitation with an initial empty or template draft version.

## Scope
- Authorization (editor or owner).
- Initial minimal valid spec for the chosen type.
- Emits `InvitationCreated` and `InvitationVersionCreated`.

## Deliverables
- Application service and API endpoint.

## Acceptance criteria
- [ ] Created invitation has a valid draft version.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Integration test for create and authorization.
