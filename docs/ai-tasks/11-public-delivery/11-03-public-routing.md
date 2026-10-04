# T11.03 — Develop Public Routing Layer

| Field      | Value                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [11 — Public Delivery](README.md)                                                                                                         |
| Status     | `todo`                                                                                                                                    |
| Priority   | P0 — MVP critical path                                                                                                                    |
| Depends on | [T11.01](11-01-cdn-setup.md), [T11.02](11-02-immutable-storage.md), [T10.03](../10-campaigns/10-03-personalization-engine.md)             |
| Unblocks   | [T06.14](../06-creator-app/06-14-publish-controls-ui.md), [T11.04](11-04-seo-opengraph.md), [T15.04](../15-testing/15-04-load-testing.md) |
| Docs       | [PUBLIC_DELIVERY.md](../../PUBLIC_DELIVERY.md)                                                                                            |

## Goal

Implement the routing logic that maps friendly public URLs (e.g., invite.app/c/event123) to specific immutable builds in object storage.

## Scope

- Edge worker or lightweight API routing resolving friendly IDs to build paths.
- Handling guest tokens for personalized delivery.

## Deliverables

- Routing service/worker.

## Acceptance criteria

- [ ] Users visiting friendly URLs are seamlessly served the correct static build.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
