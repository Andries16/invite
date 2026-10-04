# T01.04 — Project entity

| Field      | Value                                                                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [01 — Identity and projects](README.md)                                                                                                         |
| Status     | `todo`                                                                                                                                          |
| Priority   | P0 — MVP critical path                                                                                                                          |
| Depends on | [T00.15](../00-foundation/00-15-domain-package.md), [T00.19](../00-foundation/00-19-database-package.md)                                        |
| Unblocks   | [T01.05](01-05-membership-roles.md), [T03.01](../03-invitation-domain/03-01-invitation-entity.md), [T08.01](../08-assets/08-01-asset-entity.md) |
| Docs       | [DATA_MODEL.md](../../DATA_MODEL.md), [DATA.md](../../DATA.md)                                                                                  |

## Goal

Project as the tenant container owning invitations, campaigns, conversations, assets, analytics and members.

## Scope

- Project entity: id, name, ownerUserId, status (active, suspended, deleted), timestamps.
- Repository and migration.

## Deliverables

- `packages/domain/project`, adapter, migration.

## Acceptance criteria

- [ ] Every tenant-owned entity introduced later references a projectId.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Domain unit tests and repository integration tests.
