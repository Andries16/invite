# T06.13 — Pre-publish review

| Field | Value |
| --- | --- |
| Phase | [06 — Creator application](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T06.08](06-08-live-preview.md), [T05.17](../05-renderer/05-17-renderer-accessibility.md) |
| Unblocks | [T06.14](06-14-publish-controls-ui.md) |
| Docs | [DESIGN.md](../../DESIGN.md) |

## Goal
Final review with full, mobile, desktop and interaction previews plus warnings.

## Scope
- Accessibility, performance and missing-content warnings in non-technical language.

## Deliverables
- `features/studio/publish-review/*`.

## Acceptance criteria
- [ ] Warnings never expose React, CSS, bundles or storage concepts.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
