# T08.02 — Upload intent and direct upload

| Field | Value |
| --- | --- |
| Phase | [08 — Assets](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T08.01](08-01-asset-entity.md), [T00.20](../00-foundation/00-20-storage-package.md), [T01.06](../01-identity-projects/01-06-authorization-guard.md) |
| Unblocks | [T08.03](08-03-file-inspection.md) |
| Docs | [ASSETS.md](../../ASSETS.md), [SECURITY.md](../../SECURITY.md) |

## Goal
Authorized, size-limited direct uploads to the private quarantine namespace.

## Scope
- Create upload intent returning a signed URL with size and content-length constraints.
- Complete upload endpoint enqueueing inspection.

## Deliverables
- Asset upload endpoints.

## Acceptance criteria
- [ ] Storage keys never derive from user filenames.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Integration tests for intent, completion and authorization.
