# T02.15 — Variable definition schema

| Field      | Value                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| Phase      | [02 — InvitationSpec](README.md)                                                                     |
| Status     | `todo`                                                                                               |
| Priority   | P1 — MVP / production readiness                                                                      |
| Depends on | [T02.04](02-04-content-model-schema.md)                                                              |
| Unblocks   | —                                                                                                    |
| Docs       | [CAMPAIGNS.md](../../CAMPAIGNS.md), [ADR-005-campaign-reuse.md](../../adr/ADR-005-campaign-reuse.md) |

## Goal

Declared campaign variables and placeholder syntax.

## Scope

- Variable schema: name, type (string, number, date, enum), required, max length.
- Placeholder syntax `{{recipient.firstName}}` allowed only in approved fields.
- Static analysis listing all placeholders used in a spec.

## Deliverables

- `v1/variables.ts`, placeholder parser.

## Acceptance criteria

- [ ] Placeholders in disallowed fields fail validation.
- [ ] Undeclared variables fail validation.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for parser and location rules.
