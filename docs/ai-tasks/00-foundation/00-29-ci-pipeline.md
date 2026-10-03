# T00.29 — Continuous integration

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T00.10](00-10-lint-and-format-rules.md), [T00.16](00-16-testing-package.md) |
| Unblocks | — |
| Docs | [TESTING.md](../../TESTING.md), [TEST_PLAN.md](../../TEST_PLAN.md), [OPERATIONS.md](../../OPERATIONS.md) |

## Goal
GitHub Actions pipeline enforcing quality gates before merge.

## Scope
- Install with lockfile, cache, typecheck, lint, unit tests, build.
- Integration test job with service containers.
- Dependency vulnerability scanning.

## Deliverables
- `.github/workflows/ci.yml`.

## Acceptance criteria
- [ ] Pull requests are blocked on failing gates.
- [ ] Lockfile drift fails CI.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
