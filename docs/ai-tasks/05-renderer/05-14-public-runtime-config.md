# T05.14 — Public-safe runtime configuration

| Field      | Value                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| Phase      | [05 — Invitation renderer](README.md)                                                                |
| Status     | `todo`                                                                                               |
| Priority   | P0 — MVP critical path                                                                               |
| Depends on | [T05.01](05-01-runtime-package-scaffold.md)                                                          |
| Unblocks   | —                                                                                                    |
| Docs       | [SECURITY.md](../../SECURITY.md), [PROJECT.md](../../PROJECT.md), [RENDERING.md](../../RENDERING.md) |

## Goal

Explicit allowlist of configuration exposed to invitations.

## Scope

- Schema: public interaction API base URL, publication public ID, analytics endpoint, locale.
- Type prevents adding secret-bearing fields.

## Deliverables

- `config/public-runtime-config.ts`.

## Acceptance criteria

- [ ] Build fails if unknown config keys are present.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit test rejecting extra keys.
