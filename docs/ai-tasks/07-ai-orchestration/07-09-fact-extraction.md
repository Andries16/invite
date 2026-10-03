# T07.09 — Structured fact extraction

| Field | Value |
| --- | --- |
| Phase | [07 — AI orchestration](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T07.07](07-07-prompt-architecture.md), [T07.04](07-04-conversation-entity.md), [T02.03](../02-invitation-spec/02-03-metadata-people-event-schemas.md) |
| Unblocks | [T07.10](07-10-question-planner.md), [T07.11](07-11-design-brief.md), [T07.15](07-15-decision-provenance.md) |
| Docs | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [DESIGN_AI.md](../../DESIGN_AI.md) |

## Goal
Extract occasion, people, event, story, tone and preferences into typed facts.

## Scope
- Fact schema with provenance: explicit, derived, recommendation, default.
- Merge strategy that never overrides explicit decisions.

## Deliverables
- `packages/ai/extraction/*`.

## Acceptance criteria
- [ ] Explicit facts are never silently replaced.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Fixture tests with fake provider.
