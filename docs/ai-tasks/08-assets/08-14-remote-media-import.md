# T08.14 — SSRF-safe remote media import

| Field | Value |
| --- | --- |
| Phase | [08 — Assets](README.md) |
| Status | `todo` |
| Priority | P2 — Post-MVP or optional |
| Depends on | [T08.03](08-03-file-inspection.md) |
| Unblocks | — |
| Docs | [SECURITY_MODEL.md](../../SECURITY_MODEL.md) |

## Goal
Import media from a URL safely if the feature is enabled.

## Scope
- Scheme validation, safe DNS resolution, private range blocking, redirect and size limits, content validation, controlled copy.

## Deliverables
- Import job.

## Acceptance criteria
- [ ] SSRF fixtures blocked.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
