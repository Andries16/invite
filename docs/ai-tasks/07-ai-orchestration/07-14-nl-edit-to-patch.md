# T07.14 — Natural language edits to patches

| Field      | Value                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                                                                     |
| Status     | `todo`                                                                                                                 |
| Priority   | P0 — MVP critical path                                                                                                 |
| Depends on | [T07.13](07-13-initial-spec-generation.md), [T03.07](../03-invitation-domain/03-07-apply-patch-use-case.md)            |
| Unblocks   | [T07.26](07-26-ai-evaluation-harness.md)                                                                               |
| Docs       | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [PRODUCT.md](../../PRODUCT.md), [DESIGN_AI.md](../../DESIGN_AI.md) |

## Goal

Convert requests like "make it more romantic" into structured patches.

## Scope

- Model receives current spec summary and returns patch operations.
- Unrelated sections are not regenerated.
- Design consistency preserved unless the user changes direction.

## Deliverables

- `packages/ai/editing/*`.

## Acceptance criteria

- [ ] "Change the button" never replaces the entire theme.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Evaluation fixtures for common edit requests.
