# T06.16 — Media library UI

| Field      | Value                                                                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [06 — Creator application](README.md)                                                                                                            |
| Status     | `todo`                                                                                                                                           |
| Priority   | P0 — MVP critical path                                                                                                                           |
| Depends on | [T06.02](06-02-typed-api-client.md), [T08.10](../08-assets/08-10-asset-api.md), [T04.07](../04-design-system/04-07-creator-domain-components.md) |
| Unblocks   | [T06.18](06-18-creator-responsive-a11y.md)                                                                                                       |
| Docs       | [ASSETS.md](../../ASSETS.md)                                                                                                                     |

## Goal

Upload, browse, inspect and delete assets.

## Scope

- Direct upload with progress.
- Processing state and rejection reasons.

## Deliverables

- `features/media/*`.

## Acceptance criteria

- [ ] Client-side limits mirror server limits but are not relied upon.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
