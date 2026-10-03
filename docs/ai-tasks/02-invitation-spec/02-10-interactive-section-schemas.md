# T02.10 — Interactive section schemas

| Field | Value |
| --- | --- |
| Phase | [02 — InvitationSpec](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T02.05](02-05-section-union-schema.md), [T02.13](02-13-interaction-spec-schema.md) |
| Unblocks | [T02.16](02-16-domain-validation.md), [T05.09](../05-renderer/05-09-interactive-components.md) |
| Docs | [DESIGN.md](../../DESIGN.md), [public-interactions.md](../../domains/public-interactions.md) |

## Goal
RSVP, quiz, reveal and button sections.

## Scope
- RSVP: fields from an allowlisted set, deadline, guest count limits.
- Quiz: questions, options, correct answers optional, result messages.
- Reveal: trigger type and hidden content.
- Button: label and action from an allowlisted action set.

## Deliverables
- `v1/sections/{rsvp,quiz,reveal,button}.ts`.

## Acceptance criteria
- [ ] Actions cannot reference arbitrary URLs or scripts.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests per section.
