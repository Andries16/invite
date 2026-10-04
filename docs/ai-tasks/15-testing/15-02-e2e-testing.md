# T15.02 — Implement End-to-End (E2E) Test Suite

| Field      | Value                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------- |
| Phase      | [15 — Testing](README.md)                                                                                           |
| Status     | `todo`                                                                                                              |
| Priority   | P0 — MVP critical path                                                                                              |
| Depends on | [T06.01](../06-creator-app/06-01-creator-shell-routing.md), [T10.02](../10-campaigns/10-02-guest-management-api.md) |
| Unblocks   | —                                                                                                                   |
| Docs       | [TESTING.md](../../TESTING.md)                                                                                      |

## Goal

Create E2E tests covering critical user journeys like account creation, generating an invitation, and RSVPing.

## Scope

- Playwright/Cypress setup.
- Core journey test scripts.

## Deliverables

- E2E test suite.

## Acceptance criteria

- [ ] CI fails if any critical path is broken.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
