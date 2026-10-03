# T03.10 — Invitation domain events

| Field | Value |
| --- | --- |
| Phase | [03 — Invitation domain](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T03.05](03-05-create-invitation-use-case.md), [T00.22](../00-foundation/00-22-outbox-dispatcher.md) |
| Unblocks | — |
| Docs | [IMPLEMENTATION.md](../../IMPLEMENTATION.md) |

## Goal
Emit invitation events through the outbox where decoupling is useful.

## Scope
- InvitationCreated, InvitationVersionCreated, InvitationArchived.
- Events carry stable IDs and minimal data.

## Deliverables
- Event types and outbox wiring.

## Acceptance criteria
- [ ] Events are emitted only after commit.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Integration test asserting outbox entries.
