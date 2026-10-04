# T08.03 — File signature inspection

| Field      | Value                                                                                                                                                                                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [08 — Assets](README.md)                                                                                                                                                                                                                                             |
| Status     | `todo`                                                                                                                                                                                                                                                               |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                                               |
| Depends on | [T08.02](08-02-upload-intent.md)                                                                                                                                                                                                                                     |
| Unblocks   | [T08.04](08-04-asset-limits-quotas.md), [T08.05](08-05-image-processing.md), [T08.06](08-06-video-processing.md), [T08.07](08-07-svg-sanitization.md), [T08.08](08-08-audio-support.md), [T08.09](08-09-malware-scanning.md), [T08.14](08-14-remote-media-import.md) |
| Docs       | [ASSETS.md](../../ASSETS.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md)                                                                                                                                                                                           |

## Goal

Determine real type from file signatures and decoding.

## Scope

- Ignore client MIME, extension and metadata.
- Allowlist configured centrally: JPEG, PNG, WebP, AVIF, SVG, MP4, WebM, GIF, audio when enabled.

## Deliverables

- Inspection job handler.

## Acceptance criteria

- [ ] Mismatched or unknown files are rejected with `ASSET_REJECTED`.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Tests with disguised files.
