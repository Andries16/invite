# T07.05 — Messages and interaction records

| Field | Value |
| --- | --- |
| Phase | [07 — AI orchestration](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T07.04](07-04-conversation-entity.md) |
| Unblocks | [T07.22](07-22-conversation-api.md) |
| Docs | [AI.md](../../AI.md), [DATA_MODEL.md](../../DATA_MODEL.md) |

## Goal
Persist messages, interaction requests and responses.

## Scope
- Message: role, content blocks, createdAt.
- InteractionRequest and InteractionResponse linked by interaction ID.
- Paginated history.

## Deliverables
- Repositories and migrations.

## Acceptance criteria
- [ ] Raw messages are history; structured state is the generation source.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
