# T01.08 — Membership management API

| Field      | Value                                                                |
| ---------- | -------------------------------------------------------------------- |
| Phase      | [01 — Identity and projects](README.md)                              |
| Status     | `todo`                                                               |
| Priority   | P1 — MVP / production readiness                                      |
| Depends on | [T01.07](01-07-project-api.md)                                       |
| Unblocks   | [T06.17](../06-creator-app/06-17-settings-members-ui.md)             |
| Docs       | [API.md](../../API.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md) |

## Goal

Invite, change role and remove project members.

## Scope

- Invitation by email with expiring token.
- Accept invitation flow.
- Role change and removal respecting the last-owner invariant.

## Deliverables

- Membership endpoints and email job.

## Acceptance criteria

- [ ] Only owners can change roles.
- [ ] Membership changes are audited.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Integration tests for invite, accept, role change and removal.
