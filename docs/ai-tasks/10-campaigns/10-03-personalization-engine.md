# T10.03 — Build Personalization Engine

| Field | Value |
| --- | --- |
| Phase | [10 — Campaigns](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T10.01](10-01-campaign-data-model.md), [T05.01](../05-renderer/05-01-runtime-package-scaffold.md), [T11.02](../11-public-delivery/11-02-immutable-storage.md) |
| Unblocks | [T10.04](10-04-dispatch-mechanisms.md), [T11.03](../11-public-delivery/11-03-public-routing.md) |
| Docs | [CAMPAIGNS.md](../../CAMPAIGNS.md), [RENDERING.md](../../RENDERING.md) |

## Goal
Develop the engine that injects guest-specific data (name, unique links) into a standard published invitation build without requiring a full rebuild per guest.

## Scope
- Dynamic data injection logic (edge function or client-side hydrated variables).
- Link generation (unique token per guest).

## Deliverables
- Personalization module.

## Acceptance criteria
- [ ] A single static build serves multiple guests uniquely via URL token.
- [ ] Guest's name and pre-filled RSVP forms work correctly.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
