# T00.04 — ADR: API transport and contracts

| Field      | Value                                                                                                                                                                                                                                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [00 — Foundation](README.md)                                                                                                                                                                                                                                                                           |
| Status     | `todo`                                                                                                                                                                                                                                                                                                 |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                                                                                 |
| Depends on | [T00.01](00-01-resolve-documentation-conflicts.md)                                                                                                                                                                                                                                                     |
| Unblocks   | [T00.14](00-14-contracts-package.md), [T00.25](00-25-api-app-bootstrap.md), [T10.01](../10-campaigns/10-01-campaign-data-model.md), [T12.01](../12-infrastructure/12-01-setup-iac.md), [T12.02](../12-infrastructure/12-02-provision-databases.md), [T14.02](../14-security/14-02-input-validation.md) |
| Docs       | [API.md](../../API.md), [ARCHITECTURE.md](../../ARCHITECTURE.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [README.md](../../adr/README.md)                                                                                                                                                       |

## Goal

Decide REST versus typed RPC for the control-plane API and how contracts are shared with the creator.

## Scope

- Evaluate REST + Zod contracts, tRPC, ts-rest, OpenAPI generation.
- Decide error envelope shape, pagination style and idempotency header.

## Deliverables

- `docs/adr/ADR-009-api-transport.md`.
- API.md updated with the selected conventions.

## Acceptance criteria

- [ ] Contracts are shared from `packages/contracts` without importing server code into the creator.
- [ ] Error envelope matches API.md example.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
