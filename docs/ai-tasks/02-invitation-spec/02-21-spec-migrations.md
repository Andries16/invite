# T02.21 — Spec migration framework

| Field | Value |
| --- | --- |
| Phase | [02 — InvitationSpec](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T02.01](02-01-spec-package-scaffold.md) |
| Unblocks | — |
| Docs | [DATA_MODEL.md](../../DATA_MODEL.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md) |

## Goal
Convert older spec versions to the current internal version.

## Scope
- Migration registry keyed by version.
- Chained migration to latest.
- Migrations are pure and tested with fixtures.

## Deliverables
- `migrations/*` with a no-op v1 baseline.

## Acceptance criteria
- [ ] Old JSON shapes are never assumed current.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Fixture-based migration tests.
