# T00.14 — Contracts package

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T00.11](00-11-shared-package.md), [T00.04](00-04-adr-api-transport.md) |
| Unblocks | [T00.23](00-23-idempotency-infrastructure.md), [T00.25](00-25-api-app-bootstrap.md), [T00.26](00-26-error-model-http-mapping.md), [T01.07](../01-identity-projects/01-07-project-api.md), [T06.02](../06-creator-app/06-02-typed-api-client.md) |
| Docs | [API.md](../../API.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [TEST_PLAN.md](../../TEST_PLAN.md) |

## Goal
Shared, transport-independent API contracts and error codes.

## Scope
- `ErrorCode` union from IMPLEMENTATION.md §10 and error envelope schema.
- Pagination request/response schemas.
- Idempotency key schema.
- Folder structure per domain (`invitations/`, `projects/`, ...).

## Deliverables
- `packages/contracts`.

## Acceptance criteria
- [ ] Contracts are Zod schemas with inferred types; no duplicated handwritten types.
- [ ] Package has no server-only dependencies.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Contract schema unit tests.
