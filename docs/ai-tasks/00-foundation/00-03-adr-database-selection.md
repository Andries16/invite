# T00.03 — ADR: database selection

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T00.01](00-01-resolve-documentation-conflicts.md) |
| Unblocks | [T00.18](00-18-local-dev-environment.md), [T00.19](00-19-database-package.md), [T15.01](../15-testing/15-01-unit-testing.md) |
| Docs | [ARCHITECTURE.md](../../ARCHITECTURE.md), [DATA.md](../../DATA.md), [DATA_MODEL.md](../../DATA_MODEL.md), [README.md](../../adr/README.md) |

## Goal
Choose PostgreSQL or MongoDB as the primary database, as required by ARCHITECTURE.md.

## Scope
- Evaluate transactions (publication pointer + invitation update, idempotency + result), JSON spec storage, migrations, outbox support and operational cost.
- Decide ORM / query builder / driver.
- Decide migration tool.

## Deliverables
- `docs/adr/ADR-008-database.md`.

## Acceptance criteria
- [ ] ADR addresses transactions, JSON storage, migrations and outbox.
- [ ] ARCHITECTURE.md stack table updated from "PostgreSQL or MongoDB" to the decision.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
