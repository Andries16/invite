# T07.16 — Narrow AI tools

| Field      | Value                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                                                      |
| Status     | `todo`                                                                                                  |
| Priority   | P1 — MVP / production readiness                                                                         |
| Depends on | [T07.07](07-07-prompt-architecture.md), [T03.07](../03-invitation-domain/03-07-apply-patch-use-case.md) |
| Unblocks   | —                                                                                                       |
| Docs       | [AI.md](../../AI.md), [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md)                                |

## Goal

Narrow, validated tools for the model.

## Scope

- Read current spec, propose patch, list assets, request upload, list themes, list components, validate spec, get generation status.
- Parameters validated and authorized server-side.

## Deliverables

- `packages/ai/tools/*`.

## Acceptance criteria

- [ ] No generic command, query or filesystem tools exist.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Tests for authorization of each tool.
