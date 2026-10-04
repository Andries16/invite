# T02.04 — Content model schema

| Field      | Value                                                                                  |
| ---------- | -------------------------------------------------------------------------------------- |
| Phase      | [02 — InvitationSpec](README.md)                                                       |
| Status     | `todo`                                                                                 |
| Priority   | P0 — MVP critical path                                                                 |
| Depends on | [T02.02](02-02-primitive-value-schemas.md)                                             |
| Unblocks   | [T02.05](02-05-section-union-schema.md), [T02.15](02-15-variable-definition-schema.md) |
| Docs       | [DATA.md](../../DATA.md), [DESIGN.md](../../DESIGN.md)                                 |

## Goal

Shared content model referenced by sections (headlines, paragraphs, quotes, memories, moments).

## Scope

- Content blocks with stable IDs.
- Localizable text fields.
- Variable placeholders allowed only in approved fields (see T02.15).

## Deliverables

- `v1/content` schemas.

## Acceptance criteria

- [ ] Content never accepts raw HTML.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for valid and invalid content.
