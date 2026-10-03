# T08.05 — Image processing and variants

| Field | Value |
| --- | --- |
| Phase | [08 — Assets](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T08.03](08-03-file-inspection.md) |
| Unblocks | [T08.10](08-10-asset-api.md), [T08.11](08-11-asset-deduplication.md), [T08.13](08-13-public-asset-delivery.md) |
| Docs | [ASSETS.md](../../ASSETS.md) |

## Goal
Generate responsive variants.

## Scope
- Variants: thumbnail, card, content, hero; modern formats with fallback.
- Strip metadata (EXIF location) from public variants.
- Record width, height, format, bytes, status.

## Deliverables
- Image processing job handler.

## Acceptance criteria
- [ ] Originals never modified.
- [ ] Processing is idempotent per asset version.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Processing tests with synthetic images.
