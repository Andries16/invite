# T06.04 — Authentication screens

| Field      | Value                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------- |
| Phase      | [06 — Creator application](README.md)                                                                           |
| Status     | `todo`                                                                                                          |
| Priority   | P0 — MVP critical path                                                                                          |
| Depends on | [T06.01](06-01-creator-shell-routing.md), [T01.02](../01-identity-projects/01-02-authentication-integration.md) |
| Unblocks   | —                                                                                                               |
| Docs       | [SECURITY.md](../../SECURITY.md)                                                                                |

## Goal

Sign in, sign out, session expiry handling and accept-membership flow.

## Deliverables

- `features/auth/*`.

## Acceptance criteria

- [ ] Expired sessions redirect to sign-in preserving intent.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
