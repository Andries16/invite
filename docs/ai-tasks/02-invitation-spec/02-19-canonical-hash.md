# T02.19 — Canonical serialization and hashing

| Field | Value |
| --- | --- |
| Phase | [02 — InvitationSpec](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T02.18](02-18-spec-normalization.md) |
| Unblocks | — |
| Docs | [RENDERING.md](../../RENDERING.md), [DATA_MODEL.md](../../DATA_MODEL.md) |

## Goal
Deterministic spec hash used for build inputs and caching.

## Scope
- Canonical JSON serialization with sorted keys.
- SHA-256 hash helper.

## Deliverables
- `hash.ts`.

## Acceptance criteria
- [ ] Equal normalized specs produce equal hashes regardless of key order.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests for hash stability.
