# T02.13 — InteractionSpec schema

| Field      | Value                                                                                  |
| ---------- | -------------------------------------------------------------------------------------- |
| Phase      | [02 — InvitationSpec](README.md)                                                       |
| Status     | `todo`                                                                                 |
| Priority   | P0 — MVP critical path                                                                 |
| Depends on | [T02.02](02-02-primitive-value-schemas.md)                                             |
| Unblocks   | [T02.10](02-10-interactive-section-schemas.md), [T02.16](02-16-domain-validation.md)   |
| Docs       | [DATA.md](../../DATA.md), [DESIGN.md](../../DESIGN.md), [PROJECT.md](../../PROJECT.md) |

## Goal

Typed definitions of invitation interactions (RSVP, quiz answers, guest messages, reactions, song selection).

## Scope

- Interaction type union with configuration per type.
- Link between sections and interactions by stable ID.

## Deliverables

- `v1/interactions.ts`.

## Acceptance criteria

- [ ] Unknown interaction types fail validation.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests per interaction type.
