# Phase 10 — Campaigns

Build the campaign management system, handling guest lists, personalization, and dispatch for published invitations.

**Exit condition:** The platform supports adding guests, generating personalized links, and tracking RSVPs.

| ID | Task | Priority | Depends on |
| --- | --- | --- | --- |
| T10.01 | [Design Campaign Data Models](10-01-campaign-data-model.md) | P0 | [T03.01](../03-invitation-domain/03-01-invitation-entity.md), [T00.04](../00-foundation/00-04-adr-api-transport.md) |
| T10.02 | [Implement Guest List Management API](10-02-guest-management-api.md) | P0 | [T10.01](10-01-campaign-data-model.md) |
| T10.03 | [Build Personalization Engine](10-03-personalization-engine.md) | P1 | [T10.01](10-01-campaign-data-model.md), [T05.01](../05-renderer/05-01-runtime-package-scaffold.md), [T11.02](../11-public-delivery/11-02-immutable-storage.md) |
| T10.04 | [Integrate Dispatch Mechanisms](10-04-dispatch-mechanisms.md) | P2 | [T10.01](10-01-campaign-data-model.md), [T10.03](10-03-personalization-engine.md) |
| T10.05 | [Implement Analytics & Tracking](10-05-analytics-tracking.md) | P2 | [T10.04](10-04-dispatch-mechanisms.md) |

[Back to task index](../README.md)
