# T12.01 — Setup Infrastructure as Code (IaC)

| Field      | Value                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [12 — Infrastructure](README.md)                                                                                                                                                                                                                                                                                                                                                              |
| Status     | `todo`                                                                                                                                                                                                                                                                                                                                                                                        |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                                                                                                                                                                        |
| Depends on | [T00.04](../00-foundation/00-04-adr-api-transport.md)                                                                                                                                                                                                                                                                                                                                         |
| Unblocks   | [T11.01](../11-public-delivery/11-01-cdn-setup.md), [T11.02](../11-public-delivery/11-02-immutable-storage.md), [T12.02](12-02-provision-databases.md), [T12.03](12-03-setup-caching.md), [T12.04](12-04-configure-workers.md), [T13.02](../13-operations/13-02-logging-metrics.md), [T13.04](../13-operations/13-04-cicd-pipelines.md), [T14.03](../14-security/14-03-secrets-management.md) |
| Docs       | [INFRASTRUCTURE.md](../../INFRASTRUCTURE.md)                                                                                                                                                                                                                                                                                                                                                  |

## Goal

Initialize Terraform or Pulumi definitions for core infrastructure components (VPC, ECS/EKS clusters, load balancers).

## Scope

- Repository and state management setup.
- Core network and compute resource definitions.

## Deliverables

- IaC repository/module.

## Acceptance criteria

- [ ] Infrastructure can be provisioned and destroyed repeatably via code.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
