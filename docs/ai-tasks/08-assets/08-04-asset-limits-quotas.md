# T08.04 — Limits and quotas

| Field | Value |
| --- | --- |
| Phase | [08 — Assets](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T08.03](08-03-file-inspection.md) |
| Unblocks | — |
| Docs | [ASSETS.md](../../ASSETS.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md) |

## Goal
Enforce size, dimension, duration, decompression, count and project quotas server-side.

## Deliverables
- Limits config and enforcement.

## Acceptance criteria
- [ ] Decompression bombs are rejected safely.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Oversized and bomb fixtures.
