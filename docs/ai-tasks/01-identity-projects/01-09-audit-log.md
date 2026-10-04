# T01.09 — Audit log

| Field      | Value                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------- |
| Phase      | [01 — Identity and projects](README.md)                                                             |
| Status     | `todo`                                                                                              |
| Priority   | P1 — MVP / production readiness                                                                     |
| Depends on | [T01.06](01-06-authorization-guard.md)                                                              |
| Unblocks   | [T01.10](01-10-account-deletion.md), [T03.11](../03-invitation-domain/03-11-invitation-deletion.md) |
| Docs       | [SECURITY_MODEL.md](../../SECURITY_MODEL.md), [SECURITY.md](../../SECURITY.md)                      |

## Goal

Record security-sensitive operations without secret values.

## Scope

- Audit entry: actor, action, resource, projectId, timestamp, correlationId, safe metadata.
- Actions: membership changes, publication, unpublication, campaign import, asset deletion, account deletion.
- Append-only repository.

## Deliverables

- Audit module and migration.

## Acceptance criteria

- [ ] Audit entries are immutable.
- [ ] No tokens or secrets in metadata.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for metadata sanitization.
