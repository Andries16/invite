# T10.02 — Implement Guest List Management API

| Field      | Value                                        |
| ---------- | -------------------------------------------- |
| Phase      | [10 — Campaigns](README.md)                  |
| Status     | `todo`                                       |
| Priority   | P0 — MVP critical path                       |
| Depends on | [T10.01](10-01-campaign-data-model.md)       |
| Unblocks   | [T15.02](../15-testing/15-02-e2e-testing.md) |
| Docs       | [CAMPAIGNS.md](../../CAMPAIGNS.md)           |

## Goal

Build API endpoints for adding, editing, removing, and importing guests into a campaign.

## Scope

- CRUD for guest entities.
- CSV import endpoint and parsing.

## Deliverables

- Guest management API routes and services.

## Acceptance criteria

- [ ] Creators can seamlessly manage recipient lists.
- [ ] Import handles large files via queues if necessary.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
