# T01.01 — User entity and repository

| Field      | Value                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [01 — Identity and projects](README.md)                                                                                              |
| Status     | `todo`                                                                                                                               |
| Priority   | P0 — MVP critical path                                                                                                               |
| Depends on | [T00.15](../00-foundation/00-15-domain-package.md), [T00.19](../00-foundation/00-19-database-package.md)                             |
| Unblocks   | [T01.02](01-02-authentication-integration.md), [T01.05](01-05-membership-roles.md), [T14.01](../14-security/14-01-auth-hardening.md) |
| Docs       | [DATA_MODEL.md](../../DATA_MODEL.md), [DATA.md](../../DATA.md), [SECURITY.md](../../SECURITY.md)                                     |

## Goal

Persist authenticated accounts linked to the external identity provider.

## Scope

- User entity with internal ID, external identity subject, email, display name, locale, status, timestamps.
- Repository port and adapter: `findById`, `findByExternalSubject`, `create`, `updateProfile`.
- Migration.

## Deliverables

- `packages/domain/user`, repository adapter, migration.

## Acceptance criteria

- [ ] Email is never used as the primary key.
- [ ] Repository methods express domain needs, not generic queries.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Repository integration tests.
