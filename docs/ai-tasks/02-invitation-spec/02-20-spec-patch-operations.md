# T02.20 — Structured spec patch operations

| Field | Value |
| --- | --- |
| Phase | [02 — InvitationSpec](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T02.16](02-16-domain-validation.md) |
| Unblocks | [T03.07](../03-invitation-domain/03-07-apply-patch-use-case.md) |
| Docs | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [AI.md](../../AI.md), [DESIGN_AI.md](../../DESIGN_AI.md) |

## Goal
Apply structured edits instead of full-document regeneration.

## Scope
- Operations: set/replace, insert section after, remove, move, add asset reference.
- Path addressing by stable IDs where possible, JSON pointer otherwise.
- Pipeline: syntactic, schema, domain, capability validation, expected revision.
- Pure function returning a new spec or typed issues.

## Deliverables
- `patch/*`.

## Acceptance criteria
- [ ] Invalid patches never produce a partially modified spec.
- [ ] Revision mismatch returns `VERSION_CONFLICT`.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests for every operation and failure branch.
