# T08.01 — Asset entity and lifecycle

| Field      | Value                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Phase      | [08 — Assets](README.md)                                                                                               |
| Status     | `todo`                                                                                                                 |
| Priority   | P0 — MVP critical path                                                                                                 |
| Depends on | [T00.15](../00-foundation/00-15-domain-package.md), [T01.04](../01-identity-projects/01-04-project-entity.md)          |
| Unblocks   | [T08.02](08-02-upload-intent.md), [T08.10](08-10-asset-api.md), [T11.04](../11-public-delivery/11-04-seo-opengraph.md) |
| Docs       | [ASSETS.md](../../ASSETS.md), [assets.md](../../domains/assets.md), [DATA_MODEL.md](../../DATA_MODEL.md)               |

## Goal

Asset aggregate with explicit processing states.

## Scope

- States: uploading, quarantined, validating, processing, available, rejected, deleted.
- Metadata: id, projectId, mediaType, originalFilename (UI only), size, dimensions, duration, hash, variants, timestamps.

## Deliverables

- `packages/domain/asset`, repository, migration.

## Acceptance criteria

- [ ] Invalid transitions rejected.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for transitions.
