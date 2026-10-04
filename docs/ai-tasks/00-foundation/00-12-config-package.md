# T00.12 — Configuration parsing and validation

| Field      | Value                                                                                                                                                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [00 — Foundation](README.md)                                                                                                                                                                                                                                                               |
| Status     | `todo`                                                                                                                                                                                                                                                                                     |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                                                                     |
| Depends on | [T00.11](00-11-shared-package.md)                                                                                                                                                                                                                                                          |
| Unblocks   | [T00.13](00-13-observability-package.md), [T00.19](00-19-database-package.md), [T00.20](00-20-storage-package.md), [T00.21](00-21-queue-package.md), [T00.24](00-24-feature-flags.md), [T00.25](00-25-api-app-bootstrap.md), [T07.02](../07-ai-orchestration/07-02-ai-provider-adapter.md) |
| Docs       | [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [CONVENTIONS.md](../../CONVENTIONS.md), [INFRASTRUCTURE.md](../../INFRASTRUCTURE.md), [SECURITY.md](../../SECURITY.md)                                                                                                                       |

## Goal

Centralized, schema-validated configuration that fails fast on startup.

## Scope

- Zod schemas per category: database, queue, storage, auth, AI provider, public URL, internal URLs, observability.
- Per-process config composition.
- No fallback secret values in production.

## Deliverables

- `packages/config`.

## Acceptance criteria

- [ ] Missing required config aborts startup with a clear error that never prints secret values.
- [ ] Production mode rejects development defaults for secrets.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for valid, missing and invalid config.
