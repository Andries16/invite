# T03.09 — Version history and restore

| Field | Value |
| --- | --- |
| Phase | [03 — Invitation domain](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T03.07](03-07-apply-patch-use-case.md) |
| Unblocks | [T06.10](../06-creator-app/06-10-version-history-ui.md) |
| Docs | [PRODUCT.md](../../PRODUCT.md), [PROJECT.md](../../PROJECT.md) |

## Goal
List versions and restore an older version as a new draft.

## Scope
- Paginated version list with source and timestamps.
- Restore creates a new version with parent pointing to the restored version.

## Deliverables
- Endpoints and use case.

## Acceptance criteria
- [ ] Restore never mutates historical versions.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Integration tests.
