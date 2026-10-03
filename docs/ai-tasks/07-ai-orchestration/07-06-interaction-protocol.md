# T07.06 — Typed interaction protocol

| Field | Value |
| --- | --- |
| Phase | [07 — AI orchestration](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T02.01](../02-invitation-spec/02-01-spec-package-scaffold.md) |
| Unblocks | [T07.10](07-10-question-planner.md), [T07.24](07-24-interaction-block-renderers.md) |
| Docs | [AI.md](../../AI.md), [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [DESIGN.md](../../DESIGN.md) |

## Goal
Schema for AI-requested UI interactions.

## Scope
- Blocks: message, single_choice, multi_choice, text, number, date/time, color, media, preview, confirmation, invitation_patch.
- Choice options with optional image, description and preview hints.
- Response schemas per block.

## Deliverables
- `packages/contracts/conversation/interaction.ts`.

## Acceptance criteria
- [ ] Model supplies data only; no executable UI code.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Schema tests for every block.
