# T00.26 — Error model and HTTP mapping

| Field      | Value                                                                      |
| ---------- | -------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                               |
| Status     | `todo`                                                                     |
| Priority   | P0 — MVP critical path                                                     |
| Depends on | [T00.25](00-25-api-app-bootstrap.md), [T00.14](00-14-contracts-package.md) |
| Unblocks   | —                                                                          |
| Docs       | [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [API.md](../../API.md)       |

## Goal

Machine-readable errors mapped consistently to HTTP status codes.

## Scope

- Domain error classes per `ErrorCode`.
- Mapping table to HTTP status.
- Sanitization of provider, database and filesystem errors.

## Deliverables

- Error module in `apps/api` and `packages/contracts`.

## Acceptance criteria

- [ ] No stack traces or provider messages reach clients.
- [ ] Every `ErrorCode` has a defined status.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for each mapping.
