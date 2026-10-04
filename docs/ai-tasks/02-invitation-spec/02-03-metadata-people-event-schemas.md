# T02.03 — Metadata, people and event schemas

| Field      | Value                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------------- |
| Phase      | [02 — InvitationSpec](README.md)                                                                    |
| Status     | `todo`                                                                                              |
| Priority   | P0 — MVP critical path                                                                              |
| Depends on | [T02.02](02-02-primitive-value-schemas.md)                                                          |
| Unblocks   | [T02.09](02-09-event-section-schemas.md), [T07.09](../07-ai-orchestration/07-09-fact-extraction.md) |
| Docs       | [DATA.md](../../DATA.md), [PRODUCT.md](../../PRODUCT.md), [DESIGN.md](../../DESIGN.md)              |

## Goal

Schemas for invitation type, metadata, people and event details.

## Scope

- `InvitationType`: wedding, birthday, party, date, proposal, love-declaration, anniversary, announcement, custom.
- Metadata: title, description, locale, OG text.
- Person: id, role, display name.
- EventDetails: start/end, time zone, venue, address, dress code, notes.

## Deliverables

- `v1/metadata`, `v1/people`, `v1/event` schemas.

## Acceptance criteria

- [ ] End before start is rejected by domain validation (T02.16).
- [ ] Invitation type is data, not a separate application.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests per schema.
