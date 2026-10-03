# T07.07 — Prompt architecture

| Field | Value |
| --- | --- |
| Phase | [07 — AI orchestration](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T07.01](07-01-ai-provider-interface.md) |
| Unblocks | [T07.08](07-08-capability-context.md), [T07.09](07-09-fact-extraction.md), [T07.16](07-16-ai-tools.md), [T07.18](07-18-prompt-injection-defense.md), [T07.19](07-19-context-budgeting.md) |
| Docs | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [AI.md](../../AI.md) |

## Goal
Layered prompts with strict separation of trust levels.

## Scope
- Layers: system policy, product instructions, capabilities, conversation state, user content, tool results, output schema.
- Untrusted content wrapped as data, never concatenated into system instructions.
- Versioned prompt templates in code.

## Deliverables
- `packages/ai/prompts/*`.

## Acceptance criteria
- [ ] Prompt versions are recorded on every AI call.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests asserting layer separation.
