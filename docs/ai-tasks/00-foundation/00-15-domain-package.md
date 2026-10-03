# T00.15 — Domain package skeleton

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T00.11](00-11-shared-package.md) |
| Unblocks | [T01.01](../01-identity-projects/01-01-user-entity.md), [T01.04](../01-identity-projects/01-04-project-entity.md), [T03.01](../03-invitation-domain/03-01-invitation-entity.md), [T07.04](../07-ai-orchestration/07-04-conversation-entity.md), [T08.01](../08-assets/08-01-asset-entity.md) |
| Docs | [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [CONVENTIONS.md](../../CONVENTIONS.md), [DATA_MODEL.md](../../DATA_MODEL.md) |

## Goal
Framework-free domain layer for entities, value objects, state machines and invariants.

## Scope
- Folder per aggregate: `invitation`, `project`, `generation`, `publication`, `campaign`, `asset`, `conversation`.
- Repository port interfaces expressed in domain terms.
- Domain event base types.
- State machine helper that rejects invalid transitions.

## Deliverables
- `packages/domain`.

## Acceptance criteria
- [ ] No imports from infrastructure, NestJS, database drivers or React.
- [ ] State machine helper is generic and fully typed.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests for the state machine helper.
