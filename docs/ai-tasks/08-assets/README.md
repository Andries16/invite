# Phase 08 — Assets

Secure uploads, quarantine, inspection, image/video/SVG processing, immutable variants, ownership, deduplication and reachability-based garbage collection.

**Exit condition:** Uploaded media is validated, processed into variants and referenced from specs; nothing unsafe or orphaned remains.

| ID | Task | Priority | Depends on |
| --- | --- | --- | --- |
| T08.01 | [Asset entity and lifecycle](08-01-asset-entity.md) | P0 | [T00.15](../00-foundation/00-15-domain-package.md), [T01.04](../01-identity-projects/01-04-project-entity.md) |
| T08.02 | [Upload intent and direct upload](08-02-upload-intent.md) | P0 | [T08.01](08-01-asset-entity.md), [T00.20](../00-foundation/00-20-storage-package.md), [T01.06](../01-identity-projects/01-06-authorization-guard.md) |
| T08.03 | [File signature inspection](08-03-file-inspection.md) | P0 | [T08.02](08-02-upload-intent.md) |
| T08.04 | [Limits and quotas](08-04-asset-limits-quotas.md) | P0 | [T08.03](08-03-file-inspection.md) |
| T08.05 | [Image processing and variants](08-05-image-processing.md) | P0 | [T08.03](08-03-file-inspection.md) |
| T08.06 | [Video processing](08-06-video-processing.md) | P1 | [T08.03](08-03-file-inspection.md) |
| T08.07 | [SVG sanitization](08-07-svg-sanitization.md) | P1 | [T08.03](08-03-file-inspection.md) |
| T08.08 | [Audio assets](08-08-audio-support.md) | P2 | [T08.03](08-03-file-inspection.md) |
| T08.09 | [Malware scanning hook](08-09-malware-scanning.md) | P2 | [T08.03](08-03-file-inspection.md) |
| T08.10 | [Asset API](08-10-asset-api.md) | P0 | [T08.01](08-01-asset-entity.md), [T08.05](08-05-image-processing.md) |
| T08.11 | [Per-project deduplication](08-11-asset-deduplication.md) | P2 | [T08.05](08-05-image-processing.md) |
| T08.12 | [Reachability-based garbage collection](08-12-asset-garbage-collection.md) | P1 | [T08.10](08-10-asset-api.md), [T03.02](../03-invitation-domain/03-02-invitation-version-entity.md) |
| T08.13 | [Public asset delivery](08-13-public-asset-delivery.md) | P0 | [T08.05](08-05-image-processing.md) |
| T08.14 | [SSRF-safe remote media import](08-14-remote-media-import.md) | P2 | [T08.03](08-03-file-inspection.md) |

[Back to task index](../README.md)
