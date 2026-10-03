# T03.02 — InvitationVersion entity

| Field | Value |
| --- | --- |
| Phase | [03 — Invitation domain](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T03.01](03-01-invitation-entity.md), [T02.01](../02-invitation-spec/02-01-spec-package-scaffold.md) |
| Unblocks | [T03.03](03-03-invitation-repositories.md), [T08.12](../08-assets/08-12-asset-garbage-collection.md) |
| Docs | [DATA_MODEL.md](../../DATA_MODEL.md), [DATA.md](../../DATA.md), [PRODUCT.md](../../PRODUCT.md) |

## Goal
Immutable creative state snapshot.

## Scope
- Fields: id, invitationId, versionNumber, specVersion, spec, specHash, parentVersionId, createdBy, source (manual, ai, restore), createdAt.
- Versions are append-only; edits create new versions.

## Deliverables
- `packages/domain/invitation-version`.

## Acceptance criteria
- [ ] No update method mutates an existing version.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests for version creation and parent linkage.
