# T05.13 — Asset resolution

| Field      | Value                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| Phase      | [05 — Invitation renderer](README.md)                                                                        |
| Status     | `todo`                                                                                                       |
| Priority   | P0 — MVP critical path                                                                                       |
| Depends on | [T05.01](05-01-runtime-package-scaffold.md), [T02.14](../02-invitation-spec/02-14-asset-reference-schema.md) |
| Unblocks   | —                                                                                                            |
| Docs       | [RENDERING.md](../../RENDERING.md), [ASSETS.md](../../ASSETS.md)                                             |

## Goal

Resolve AssetReferences to public-safe variant descriptors.

## Scope

- Resolver port supplied by the caller (preview vs build).
- Missing assets produce validation issues before render.

## Deliverables

- `assets/*`.

## Acceptance criteria

- [ ] Renderer never sees private storage URLs.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests with fake resolver.
