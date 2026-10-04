# T01.02 — Authentication integration

| Field      | Value                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [01 — Identity and projects](README.md)                                                                                                                |
| Status     | `todo`                                                                                                                                                 |
| Priority   | P0 — MVP critical path                                                                                                                                 |
| Depends on | [T01.01](01-01-user-entity.md), [T00.05](../00-foundation/00-05-adr-authentication-provider.md), [T00.25](../00-foundation/00-25-api-app-bootstrap.md) |
| Unblocks   | [T01.03](01-03-session-security.md), [T01.06](01-06-authorization-guard.md), [T06.04](../06-creator-app/06-04-auth-screens.md)                         |
| Docs       | [SECURITY.md](../../SECURITY.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md), [API.md](../../API.md)                                                 |

## Goal

Authenticate creator requests at the API boundary using the selected provider.

## Scope

- Login, logout and callback flow.
- Session or token validation guard.
- First-login user provisioning.
- Request context carrying the authenticated user.

## Deliverables

- Auth module in `apps/api`.

## Acceptance criteria

- [ ] Unauthenticated access to creator endpoints returns `AUTH_REQUIRED`.
- [ ] No custom cryptography.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Integration tests for authenticated, expired and missing credentials.
