# T00.19 — Database adapter and migrations

| Field      | Value                                                                                                                                                                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                                                                                                                                                                                               |
| Status     | `todo`                                                                                                                                                                                                                                                                     |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                                                     |
| Depends on | [T00.03](00-03-adr-database-selection.md), [T00.12](00-12-config-package.md), [T00.18](00-18-local-dev-environment.md)                                                                                                                                                     |
| Unblocks   | [T00.22](00-22-outbox-dispatcher.md), [T00.23](00-23-idempotency-infrastructure.md), [T01.01](../01-identity-projects/01-01-user-entity.md), [T01.04](../01-identity-projects/01-04-project-entity.md), [T03.03](../03-invitation-domain/03-03-invitation-repositories.md) |
| Docs       | [DATA.md](../../DATA.md), [DATA_MODEL.md](../../DATA_MODEL.md), [OPERATIONS.md](../../OPERATIONS.md)                                                                                                                                                                       |

## Goal

Database connection, migration tooling and transaction helper.

## Scope

- Connection management from config.
- Migration runner and first empty migration.
- Unit-of-work / transaction helper usable by application services.

## Deliverables

- `packages/database`.

## Acceptance criteria

- [ ] Migrations run forward in CI against an ephemeral database.
- [ ] Repositories can share one transaction.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Integration test for transaction commit and rollback.
