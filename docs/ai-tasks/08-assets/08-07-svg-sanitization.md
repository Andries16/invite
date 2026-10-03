# T08.07 — SVG sanitization

| Field | Value |
| --- | --- |
| Phase | [08 — Assets](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T08.03](08-03-file-inspection.md) |
| Unblocks | — |
| Docs | [ASSETS.md](../../ASSETS.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md) |

## Goal
Safe handling of SVG.

## Scope
- Remove scripts, event handlers, external references and dangerous elements.
- Rasterize when sanitization is insufficient.

## Deliverables
- SVG sanitizer.

## Acceptance criteria
- [ ] Malicious SVG fixtures produce safe output or rejection.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Malicious SVG suite.
