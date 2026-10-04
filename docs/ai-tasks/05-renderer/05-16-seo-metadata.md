# T05.16 — Document metadata and social previews

| Field      | Value                                                            |
| ---------- | ---------------------------------------------------------------- |
| Phase      | [05 — Invitation renderer](README.md)                            |
| Status     | `todo`                                                           |
| Priority   | P0 — MVP critical path                                           |
| Depends on | [T05.03](05-03-page-composition.md)                              |
| Unblocks   | —                                                                |
| Docs       | [RENDERING.md](../../RENDERING.md), [DESIGN.md](../../DESIGN.md) |

## Goal

Title, description, viewport, favicon and Open Graph metadata.

## Scope

- Mobile viewport meta always present.
- No internal IDs in public HTML.
- `noindex` by default for private invitations.

## Deliverables

- `head/*`.

## Acceptance criteria

- [ ] Artifact validation can verify viewport and title.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
