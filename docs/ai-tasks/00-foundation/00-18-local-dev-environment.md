# T00.18 — Local development environment

| Field      | Value                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                              |
| Status     | `todo`                                                                                                    |
| Priority   | P0 — MVP critical path                                                                                    |
| Depends on | [T00.03](00-03-adr-database-selection.md), [T00.08](00-08-monorepo-workspace.md)                          |
| Unblocks   | [T00.19](00-19-database-package.md), [T00.20](00-20-storage-package.md), [T00.21](00-21-queue-package.md) |
| Docs       | [INFRASTRUCTURE.md](../../INFRASTRUCTURE.md), [OPERATIONS.md](../../OPERATIONS.md)                        |

## Goal

One command starts all local dependencies.

## Scope

- Docker Compose with database, Redis, S3-compatible storage (MinIO) and a mail catcher.
- Seed script with synthetic data.
- `.env.example` files without real secrets.

## Deliverables

- `infrastructure/local/docker-compose.yml`, seed script, root scripts.

## Acceptance criteria

- [ ] Fresh clone to running stack documented in README in a few commands.
- [ ] Separate storage namespaces for uploads, processed media, artifacts and temp data.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
