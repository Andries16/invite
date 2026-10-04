# T03.01 — Invitation entity and lifecycle

| Field      | Value                                                                                                                                                                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [03 — Invitation domain](README.md)                                                                                                                                                                                                              |
| Status     | `todo`                                                                                                                                                                                                                                           |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                           |
| Depends on | [T00.15](../00-foundation/00-15-domain-package.md), [T00.01](../00-foundation/00-01-resolve-documentation-conflicts.md), [T01.04](../01-identity-projects/01-04-project-entity.md)                                                               |
| Unblocks   | [T03.02](03-02-invitation-version-entity.md), [T03.03](03-03-invitation-repositories.md), [T03.04](03-04-slug-service.md), [T07.04](../07-ai-orchestration/07-04-conversation-entity.md), [T10.01](../10-campaigns/10-01-campaign-data-model.md) |
| Docs       | [invitations.md](../../domains/invitations.md), [DATA.md](../../DATA.md), [DATA_MODEL.md](../../DATA_MODEL.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md)                                                                                     |

## Goal

Invitation aggregate with the lifecycle resolved in T00.01.

## Scope

- Fields: id, projectId, name, slug, type, status, currentDraftVersionId, publishedVersionId, revision, timestamps.
- Explicit state machine; no contradictory booleans.
- Invariant: published version remains valid while a new version generates.

## Deliverables

- `packages/domain/invitation`.

## Acceptance criteria

- [ ] Invalid transitions return typed errors.
- [ ] Impossible states are unrepresentable in types.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for every transition.
