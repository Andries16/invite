# T05.09 — Interactive components

| Field | Value |
| --- | --- |
| Phase | [05 — Invitation renderer](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T05.03](05-03-page-composition.md), [T02.10](../02-invitation-spec/02-10-interactive-section-schemas.md) |
| Unblocks | [T05.10](05-10-emotional-interactions.md), [T05.19](05-19-renderer-golden-tests.md) |
| Docs | [DESIGN.md](../../DESIGN.md), [public-interactions.md](../../domains/public-interactions.md) |

## Goal
RSVP form UI, quiz, reveal and button components.

## Scope
- RSVP and quiz submit through the public runtime client (T11.08) only.
- Reveal accessible by keyboard; never traps the recipient.
- Static fallback when JavaScript is disabled.

## Deliverables
- `components/{rsvp,quiz,reveal,button}/*`.

## Acceptance criteria
- [ ] No interaction is hover-only.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Interaction and accessibility tests.
