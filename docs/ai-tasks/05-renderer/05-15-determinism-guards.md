# T05.15 — Determinism guards

| Field | Value |
| --- | --- |
| Phase | [05 — Invitation renderer](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T05.03](05-03-page-composition.md) |
| Unblocks | — |
| Docs | [RENDERING.md](../../RENDERING.md), [ARCHITECTURE.md](../../ARCHITECTURE.md) |

## Goal
Identical inputs produce functionally identical output.

## Scope
- Seeded randomness from spec hash.
- No `Date.now` or `Math.random` in render paths (lint rule).
- Stable ID generation for DOM ids.

## Deliverables
- Determinism utilities and lint rule.

## Acceptance criteria
- [ ] Rendering a fixture twice yields identical HTML.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Double-render equality tests for all golden fixtures.
