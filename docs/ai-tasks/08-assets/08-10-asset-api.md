# T08.10 — Asset API

| Field      | Value                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------- |
| Phase      | [08 — Assets](README.md)                                                                           |
| Status     | `todo`                                                                                             |
| Priority   | P0 — MVP critical path                                                                             |
| Depends on | [T08.01](08-01-asset-entity.md), [T08.05](08-05-image-processing.md)                               |
| Unblocks   | [T06.16](../06-creator-app/06-16-media-library-ui.md), [T08.12](08-12-asset-garbage-collection.md) |
| Docs       | [ASSETS.md](../../ASSETS.md), [API.md](../../API.md)                                               |

## Goal

List, read metadata, delete and attach assets.

## Scope

- Ownership checks on read, delete, attach and public variant creation.
- Paginated listing with processing state.

## Deliverables

- Assets controller.

## Acceptance criteria

- [ ] Cross-project access denied.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Authorization tests.
