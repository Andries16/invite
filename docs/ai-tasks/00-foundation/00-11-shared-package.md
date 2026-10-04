# T00.11 — Shared primitives package

| Field      | Value                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                                                                                                                                                                |
| Status     | `todo`                                                                                                                                                                                                                                      |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                      |
| Depends on | [T00.09](00-09-typescript-strict-config.md)                                                                                                                                                                                                 |
| Unblocks   | [T00.12](00-12-config-package.md), [T00.14](00-14-contracts-package.md), [T00.15](00-15-domain-package.md), [T02.01](../02-invitation-spec/02-01-spec-package-scaffold.md), [T07.01](../07-ai-orchestration/07-01-ai-provider-interface.md) |
| Docs       | [CONVENTIONS.md](../../CONVENTIONS.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md)                                                                                                                                                        |

## Goal

Provide framework-free primitives used across packages.

## Scope

- Branded ID types (`InvitationId`, `ProjectId`, ...) and ID generation.
- `Result<T, E>` type and helpers.
- Exhaustiveness helper using `never`.
- Clock abstraction for deterministic tests.

## Deliverables

- `packages/shared`.

## Acceptance criteria

- [ ] No runtime dependency on Node-only or browser-only APIs.
- [ ] 100% of exports typed without `any`.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for ID generation and Result helpers.
