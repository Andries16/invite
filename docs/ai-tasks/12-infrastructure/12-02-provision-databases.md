# T12.02 — Provision Core Databases

| Field      | Value                                                                               |
| ---------- | ----------------------------------------------------------------------------------- |
| Phase      | [12 — Infrastructure](README.md)                                                    |
| Status     | `todo`                                                                              |
| Priority   | P0 — MVP critical path                                                              |
| Depends on | [T12.01](12-01-setup-iac.md), [T00.04](../00-foundation/00-04-adr-api-transport.md) |
| Unblocks   | —                                                                                   |
| Docs       | [INFRASTRUCTURE.md](../../INFRASTRUCTURE.md)                                        |

## Goal

Deploy the primary relational database cluster with replication and automated backups configured.

## Scope

- Database cluster provisioning (e.g., RDS).
- Security groups and access controls.

## Deliverables

- Database IaC modules.

## Acceptance criteria

- [ ] Application can securely connect to the provisioned database.
- [ ] Automated backups are configured and tested.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
