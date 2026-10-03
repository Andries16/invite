# T07.26 — AI evaluation harness

| Field | Value |
| --- | --- |
| Phase | [07 — AI orchestration](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T07.03](07-03-fake-ai-provider.md), [T07.13](07-13-initial-spec-generation.md), [T07.14](07-14-nl-edit-to-patch.md) |
| Unblocks | — |
| Docs | [AI.md](../../AI.md), [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [TEST_PLAN.md](../../TEST_PLAN.md), [TESTING.md](../../TESTING.md) |

## Goal
Automated evaluation of AI behavior.

## Scope
- Fixtures: simple invitation, wedding, declaration, interactive date, campaign, multilingual, malicious output.
- Assertions: schema validity, extracted facts, question categories, allowed operations, invariant preservation, capability usage.
- Regression comparison between model/prompt versions.

## Deliverables
- `packages/ai/evaluation/*` and CLI.

## Acceptance criteria
- [ ] Harness runs against fake and real providers.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
