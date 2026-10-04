# T02.16 — Domain validation rules

| Field      | Value                                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [02 — InvitationSpec](README.md)                                                                                                                                                                                                                                                                                                                       |
| Status     | `todo`                                                                                                                                                                                                                                                                                                                                                 |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                                                                                                                                 |
| Depends on | [T02.06](02-06-hero-section-schema.md), [T02.07](02-07-narrative-section-schemas.md), [T02.08](02-08-media-section-schemas.md), [T02.09](02-09-event-section-schemas.md), [T02.10](02-10-interactive-section-schemas.md), [T02.11](02-11-layout-utility-schemas.md), [T02.12](02-12-design-spec-schema.md), [T02.13](02-13-interaction-spec-schema.md) |
| Unblocks   | [T02.17](02-17-capability-validation.md), [T02.18](02-18-spec-normalization.md), [T02.20](02-20-spec-patch-operations.md), [T02.22](02-22-json-schema-export.md), [T02.23](02-23-golden-spec-fixtures.md)                                                                                                                                              |
| Docs       | [DESIGN_AI.md](../../DESIGN_AI.md), [GENERATION.md](../../GENERATION.md), [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md)                                                                                                                                                                                                                           |

## Goal

Validation beyond schema shape.

## Scope

- Unique section and component IDs.
- Referenced interactions and people exist.
- Event chronology and countdown targets.
- Required content per invitation type.
- Structured validation issues with path, code and message key.

## Deliverables

- `validate-domain.ts` and issue types.

## Acceptance criteria

- [ ] Validation returns all issues, not only the first.
- [ ] Issue codes are a typed union.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests per rule.
