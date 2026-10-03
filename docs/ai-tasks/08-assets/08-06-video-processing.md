# T08.06 — Video processing

| Field | Value |
| --- | --- |
| Phase | [08 — Assets](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T08.03](08-03-file-inspection.md) |
| Unblocks | — |
| Docs | [ASSETS.md](../../ASSETS.md), [DESIGN.md](../../DESIGN.md) |

## Goal
Web-optimized video variants and poster.

## Scope
- Validate codec/container and duration.
- Transcode mobile-friendly variants, poster image, metadata.
- Isolated worker with resource limits.

## Deliverables
- Video job handler.

## Acceptance criteria
- [ ] Processing time limits enforced.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
