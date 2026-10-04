# T02.22 — JSON Schema export for AI

| Field      | Value                                                                    |
| ---------- | ------------------------------------------------------------------------ |
| Phase      | [02 — InvitationSpec](README.md)                                         |
| Status     | `todo`                                                                   |
| Priority   | P0 — MVP critical path                                                   |
| Depends on | [T02.16](02-16-domain-validation.md)                                     |
| Unblocks   | —                                                                        |
| Docs       | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [AI.md](../../AI.md) |

## Goal

Export JSON Schemas for structured AI outputs (patches, facts, design brief, interactions).

## Scope

- Build step generating JSON Schema from Zod.
- Versioned output files consumed by `packages/ai`.

## Deliverables

- `scripts/export-json-schema.ts` and generated schemas.

## Acceptance criteria

- [ ] Exported schemas stay in sync with Zod (CI check).
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
