# T07.24 — Interaction block renderers

| Field | Value |
| --- | --- |
| Phase | [07 — AI orchestration](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T07.23](07-23-conversation-ui.md), [T07.06](07-06-interaction-protocol.md) |
| Unblocks | [T07.25](07-25-patch-review-ui.md) |
| Docs | [DESIGN.md](../../DESIGN.md), [AI.md](../../AI.md) |

## Goal
Trusted renderer registry for interaction blocks.

## Scope
- Choice cards, multi-select, text, number, date/time, color, media upload, preview, confirmation, patch summary.
- Exhaustive registry over the interaction union.

## Deliverables
- `features/studio/conversation/blocks/*`.

## Acceptance criteria
- [ ] Unknown blocks cannot render.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
