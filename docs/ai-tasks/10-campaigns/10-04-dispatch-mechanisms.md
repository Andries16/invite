# T10.04 — Integrate Dispatch Mechanisms

| Field | Value |
| --- | --- |
| Phase | [10 — Campaigns](README.md) |
| Status | `todo` |
| Priority | P2 — Post-MVP or optional |
| Depends on | [T10.01](10-01-campaign-data-model.md), [T10.03](10-03-personalization-engine.md) |
| Unblocks | [T10.05](10-05-analytics-tracking.md) |
| Docs | [CAMPAIGNS.md](../../CAMPAIGNS.md) |

## Goal
Implement integrations for sending invitations via Email (e.g., SendGrid/AWS SES) and stub out SMS delivery.

## Scope
- Email provider integration and template setup.
- Async dispatch jobs.

## Deliverables
- Email notification service and dispatch queue workers.

## Acceptance criteria
- [ ] Guests reliably receive email invitations with their unique links.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
