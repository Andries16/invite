# T07.13 — Initial spec generation

| Field      | Value                                                                                                                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                                                                                                                                                 |
| Status     | `todo`                                                                                                                                                                                             |
| Priority   | P0 — MVP critical path                                                                                                                                                                             |
| Depends on | [T07.12](07-12-brief-to-design-spec.md), [T07.10](07-10-question-planner.md), [T03.08](../03-invitation-domain/03-08-replace-spec-use-case.md)                                                     |
| Unblocks   | [T07.14](07-14-nl-edit-to-patch.md), [T07.17](07-17-output-repair-retry.md), [T07.21](07-21-ai-job-integration.md), [T07.26](07-26-ai-evaluation-harness.md), [T07.28](07-28-multilingual-copy.md) |
| Docs       | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [DESIGN_AI.md](../../DESIGN_AI.md), [DESIGN.md](../../DESIGN.md)                                                                               |

## Goal

Produce the first InvitationSpec from facts and DesignSpec.

## Scope

- Model proposes section structure and copy; code assembles and validates.
- Structure chosen from intent; a love declaration must not look like a wedding template.

## Deliverables

- `packages/ai/generation/*` and application use case.

## Acceptance criteria

- [ ] Output passes full validation before becoming a version.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Fixture tests across invitation types.
