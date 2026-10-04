# T06.02 — Typed API client

| Field      | Value                                                                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [06 — Creator application](README.md)                                                                                                                                                                                          |
| Status     | `todo`                                                                                                                                                                                                                         |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                         |
| Depends on | [T06.01](06-01-creator-shell-routing.md), [T00.14](../00-foundation/00-14-contracts-package.md)                                                                                                                                |
| Unblocks   | [T06.03](06-03-error-message-mapping.md), [T06.05](06-05-dashboard.md), [T06.06](06-06-invitations-list.md), [T06.11](06-11-conflict-handling.md), [T06.16](06-16-media-library-ui.md), [T06.17](06-17-settings-members-ui.md) |
| Docs       | [API.md](../../API.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md)                                                                                                                                                           |

## Goal

Typed client generated or derived from shared contracts.

## Scope

- Request/response validation in development.
- Error envelope parsing into typed errors.
- Query caching library integration.

## Deliverables

- `apps/creator/src/api/*`.

## Acceptance criteria

- [ ] No untyped fetch calls in feature code.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
