# T02.09 — Event section schemas

| Field      | Value                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------- |
| Phase      | [02 — InvitationSpec](README.md)                                                          |
| Status     | `todo`                                                                                    |
| Priority   | P0 — MVP critical path                                                                    |
| Depends on | [T02.05](02-05-section-union-schema.md), [T02.03](02-03-metadata-people-event-schemas.md) |
| Unblocks   | [T02.16](02-16-domain-validation.md), [T05.08](../05-renderer/05-08-event-components.md)  |
| Docs       | [DESIGN.md](../../DESIGN.md)                                                              |

## Goal

Event details, map/location and countdown sections.

## Scope

- Event details referencing `EventDetails`.
- Map/location without arbitrary embeds; provider and coordinates or address only.
- Countdown bound to an explicit event timestamp.

## Deliverables

- `v1/sections/{event-details,location,countdown}.ts`.

## Acceptance criteria

- [ ] Countdown without a target timestamp fails validation.
- [ ] No iframe or embed URLs accepted.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests per section.
