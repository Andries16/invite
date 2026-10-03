# T01.07 — Project API

| Field | Value |
| --- | --- |
| Phase | [01 — Identity and projects](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T01.06](01-06-authorization-guard.md), [T00.14](../00-foundation/00-14-contracts-package.md) |
| Unblocks | [T01.08](01-08-membership-api.md), [T01.10](01-10-account-deletion.md) |
| Docs | [API.md](../../API.md), [DATA_MODEL.md](../../DATA_MODEL.md) |

## Goal
Create, list, rename and archive projects.

## Scope
- Contracts in `packages/contracts/projects`.
- Paginated list of projects for the current user.
- Role-aware responses.

## Deliverables
- Projects module in `apps/api`.

## Acceptance criteria
- [ ] Users only see projects where they have membership.
- [ ] Lists are paginated.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Integration tests for CRUD and authorization.
