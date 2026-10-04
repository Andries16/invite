# Phase 06 — Creator application

Authenticated creative studio: shell, navigation, dashboard, invitations, studio layout with live preview, version history, generation progress, publishing, sharing, media and settings.

**Exit condition:** A user can sign in, create an invitation, see a live preview of a manually created spec, browse versions and reach every primary area.

| ID     | Task                                                                          | Priority | Depends on                                                                                                                                       |
| ------ | ----------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| T06.01 | [Creator shell and routing](06-01-creator-shell-routing.md)                   | P0       | [T00.28](../00-foundation/00-28-creator-app-bootstrap.md), [T04.02](../04-design-system/04-02-creator-theme.md)                                  |
| T06.02 | [Typed API client](06-02-typed-api-client.md)                                 | P0       | [T06.01](06-01-creator-shell-routing.md), [T00.14](../00-foundation/00-14-contracts-package.md)                                                  |
| T06.03 | [Error code to message mapping](06-03-error-message-mapping.md)               | P0       | [T06.02](06-02-typed-api-client.md), [T04.06](../04-design-system/04-06-creator-state-components.md)                                             |
| T06.04 | [Authentication screens](06-04-auth-screens.md)                               | P0       | [T06.01](06-01-creator-shell-routing.md), [T01.02](../01-identity-projects/01-02-authentication-integration.md)                                  |
| T06.05 | [Dashboard](06-05-dashboard.md)                                               | P1       | [T06.01](06-01-creator-shell-routing.md), [T06.02](06-02-typed-api-client.md)                                                                    |
| T06.06 | [Invitations list](06-06-invitations-list.md)                                 | P0       | [T06.02](06-02-typed-api-client.md), [T03.06](../03-invitation-domain/03-06-invitation-api.md)                                                   |
| T06.07 | [Studio layout](06-07-studio-layout.md)                                       | P0       | [T06.01](06-01-creator-shell-routing.md), [T04.05](../04-design-system/04-05-creator-overlay-components.md)                                      |
| T06.08 | [Live preview](06-08-live-preview.md)                                         | P0       | [T06.07](06-07-studio-layout.md), [T05.19](../05-renderer/05-19-renderer-golden-tests.md)                                                        |
| T06.09 | [Spec playground for manual specs](06-09-spec-dev-playground.md)              | P1       | [T06.08](06-08-live-preview.md)                                                                                                                  |
| T06.10 | [Version history UI](06-10-version-history-ui.md)                             | P0       | [T06.07](06-07-studio-layout.md), [T03.09](../03-invitation-domain/03-09-version-history.md)                                                     |
| T06.11 | [Revision conflict handling](06-11-conflict-handling.md)                      | P0       | [T06.02](06-02-typed-api-client.md)                                                                                                              |
| T06.12 | [Generation progress UI](06-12-generation-progress-ui.md)                     | P0       | [T06.07](06-07-studio-layout.md), [T09.02](../09-generation-pipeline/09-02-capability-manifest.md)                                               |
| T06.13 | [Pre-publish review](06-13-pre-publish-review.md)                             | P0       | [T06.08](06-08-live-preview.md), [T05.17](../05-renderer/05-17-renderer-accessibility.md)                                                        |
| T06.14 | [Publish, unpublish and rollback UI](06-14-publish-controls-ui.md)            | P0       | [T06.13](06-13-pre-publish-review.md), [T11.03](../11-public-delivery/11-03-public-routing.md)                                                   |
| T06.15 | [Share and QR UI](06-15-share-qr-ui.md)                                       | P0       | [T06.14](06-14-publish-controls-ui.md), [T11.04](../11-public-delivery/11-04-seo-opengraph.md)                                                   |
| T06.16 | [Media library UI](06-16-media-library-ui.md)                                 | P0       | [T06.02](06-02-typed-api-client.md), [T08.10](../08-assets/08-10-asset-api.md), [T04.07](../04-design-system/04-07-creator-domain-components.md) |
| T06.17 | [Settings and members UI](06-17-settings-members-ui.md)                       | P1       | [T06.02](06-02-typed-api-client.md), [T01.08](../01-identity-projects/01-08-membership-api.md)                                                   |
| T06.18 | [Creator responsive and accessibility pass](06-18-creator-responsive-a11y.md) | P1       | [T06.07](06-07-studio-layout.md), [T06.08](06-08-live-preview.md), [T06.16](06-16-media-library-ui.md)                                           |

[Back to task index](../README.md)
