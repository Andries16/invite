# Phase 11 — Public Delivery

Set up the infrastructure and routing for serving published invitations globally with high performance.

**Exit condition:** A scalable CDN and object storage architecture serves generated invitations on public URLs.

| ID     | Task                                                            | Priority | Depends on                                                                                                                    |
| ------ | --------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| T11.01 | [Configure CDN and Edge Caching](11-01-cdn-setup.md)            | P0       | [T05.04](../05-renderer/05-04-theme-application.md), [T12.01](../12-infrastructure/12-01-setup-iac.md)                        |
| T11.02 | [Implement Immutable Build Storage](11-02-immutable-storage.md) | P0       | [T05.04](../05-renderer/05-04-theme-application.md), [T12.01](../12-infrastructure/12-01-setup-iac.md)                        |
| T11.03 | [Develop Public Routing Layer](11-03-public-routing.md)         | P0       | [T11.01](11-01-cdn-setup.md), [T11.02](11-02-immutable-storage.md), [T10.03](../10-campaigns/10-03-personalization-engine.md) |
| T11.04 | [Implement Dynamic SEO & OpenGraph](11-04-seo-opengraph.md)     | P1       | [T11.03](11-03-public-routing.md), [T08.01](../08-assets/08-01-asset-entity.md)                                               |

[Back to task index](../README.md)
