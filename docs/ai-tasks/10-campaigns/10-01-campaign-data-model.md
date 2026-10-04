# T10.01 — Design Campaign Data Models

| Field      | Value                                                                                                                      |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [10 — Campaigns](README.md)                                                                                                |
| Status     | `todo`                                                                                                                     |
| Priority   | P0 — MVP critical path                                                                                                     |
| Depends on | [T03.01](../03-invitation-domain/03-01-invitation-entity.md), [T00.04](../00-foundation/00-04-adr-api-transport.md)        |
| Unblocks   | [T10.02](10-02-guest-management-api.md), [T10.03](10-03-personalization-engine.md), [T10.04](10-04-dispatch-mechanisms.md) |
| Docs       | [CAMPAIGNS.md](../../CAMPAIGNS.md), [DATA_MODEL.md](../../DATA_MODEL.md)                                                   |

## Goal

Implement database schemas for Campaigns, Guests, Recipients, and RSVP statuses.

## Scope

- Schema definition and migrations.
- ORM/repository implementation.

## Deliverables

- Database migrations and repository adapters.

## Acceptance criteria

- [ ] Repositories can store and retrieve campaign and guest entities.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
