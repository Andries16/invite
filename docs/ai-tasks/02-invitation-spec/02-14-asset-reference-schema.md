# T02.14 — AssetReference schema

| Field | Value |
| --- | --- |
| Phase | [02 — InvitationSpec](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T02.02](02-02-primitive-value-schemas.md) |
| Unblocks | [T02.08](02-08-media-section-schemas.md), [T05.13](../05-renderer/05-13-asset-resolution.md) |
| Docs | [ASSETS.md](../../ASSETS.md), [DATA.md](../../DATA.md) |

## Goal
Stable asset references inside the spec.

## Scope
- Reference by asset ID and optional variant hint.
- Rejects temporary upload URLs and object-storage URLs.

## Deliverables
- `v1/assets.ts`.

## Acceptance criteria
- [ ] Any URL-shaped asset reference is rejected.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Unit tests for valid IDs and rejected URLs.
