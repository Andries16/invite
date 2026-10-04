# T00.20 — Object storage adapter

| Field      | Value                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                         |
| Status     | `todo`                                                                                               |
| Priority   | P0 — MVP critical path                                                                               |
| Depends on | [T00.12](00-12-config-package.md), [T00.18](00-18-local-dev-environment.md)                          |
| Unblocks   | [T08.02](../08-assets/08-02-upload-intent.md)                                                        |
| Docs       | [ASSETS.md](../../ASSETS.md), [INFRASTRUCTURE.md](../../INFRASTRUCTURE.md), [DATA.md](../../DATA.md) |

## Goal

Provider-neutral object storage port with an S3-compatible adapter.

## Scope

- Port: put, get, head, delete, list by prefix, signed upload URL, signed read URL.
- Namespaces: uploads (private), processed media, artifacts, temp.
- Key builder that never uses user filenames.

## Deliverables

- `packages/storage`.

## Acceptance criteria

- [ ] Domain and application code depend only on the port.
- [ ] Keys follow `projects/{projectId}/assets/{assetId}/...` and `builds/{buildId}/...`.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Integration tests against MinIO.
