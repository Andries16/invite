# T03.03 — Invitation repositories

| Field | Value |
| --- | --- |
| Phase | [03 — Invitation domain](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T03.01](03-01-invitation-entity.md), [T03.02](03-02-invitation-version-entity.md), [T00.19](../00-foundation/00-19-database-package.md) |
| Unblocks | [T03.05](03-05-create-invitation-use-case.md) |
| Docs | [DATA_MODEL.md](../../DATA_MODEL.md) |

## Goal
Persistence for invitations and versions.

## Scope
- `findById`, `findBySlug`, `findPublishedBySlug`, `listByProject` (paginated), `save` with revision check.
- Version repository: `append`, `findById`, `listByInvitation`.
- Migrations and indexes (unique slug per namespace).

## Deliverables
- Adapters in `packages/database`, migrations.

## Acceptance criteria
- [ ] Save with stale revision fails with `VERSION_CONFLICT`.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Repository integration tests.
