# T08.12 — Reachability-based garbage collection

| Field      | Value                                                                                              |
| ---------- | -------------------------------------------------------------------------------------------------- |
| Phase      | [08 — Assets](README.md)                                                                           |
| Status     | `todo`                                                                                             |
| Priority   | P1 — MVP / production readiness                                                                    |
| Depends on | [T08.10](08-10-asset-api.md), [T03.02](../03-invitation-domain/03-02-invitation-version-entity.md) |
| Unblocks   | —                                                                                                  |
| Docs       | [ASSETS.md](../../ASSETS.md), [DATA.md](../../DATA.md)                                             |

## Goal

Delete assets only when unreachable from drafts, published versions, campaigns, messages and retained builds.

## Deliverables

- Cleanup job with reachability query.

## Acceptance criteria

- [ ] Never deletes based only on the current draft.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Reachability tests.
