# T00.05 — ADR: authentication provider

| Field      | Value                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                                     |
| Status     | `todo`                                                                                                           |
| Priority   | P0 — MVP critical path                                                                                           |
| Depends on | [T00.01](00-01-resolve-documentation-conflicts.md)                                                               |
| Unblocks   | [T01.02](../01-identity-projects/01-02-authentication-integration.md)                                            |
| Docs       | [SECURITY.md](../../SECURITY.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md), [README.md](../../adr/README.md) |

## Goal

Choose an established authentication mechanism; never implement cryptographic authentication from scratch.

## Scope

- Evaluate hosted identity providers versus a maintained library.
- Decide session cookies versus bearer tokens for the creator.
- Decide CSRF strategy and session invalidation mechanism.

## Deliverables

- `docs/adr/ADR-010-authentication.md`.

## Acceptance criteria

- [ ] Decision supports session invalidation for incident response.
- [ ] Decision does not leak creator sessions into public invitations.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
