# Phase 12 — Infrastructure

Provision the underlying cloud infrastructure required to run the control plane, renderer, and storage layers.

**Exit condition:** A robust, repeatable Infrastructure as Code setup successfully deploying all necessary cloud resources.

| ID     | Task                                                     | Priority | Depends on                                                                          |
| ------ | -------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------- |
| T12.01 | [Setup Infrastructure as Code (IaC)](12-01-setup-iac.md) | P0       | [T00.04](../00-foundation/00-04-adr-api-transport.md)                               |
| T12.02 | [Provision Core Databases](12-02-provision-databases.md) | P0       | [T12.01](12-01-setup-iac.md), [T00.04](../00-foundation/00-04-adr-api-transport.md) |
| T12.03 | [Setup Caching Layer](12-03-setup-caching.md)            | P0       | [T12.01](12-01-setup-iac.md)                                                        |
| T12.04 | [Configure Worker Nodes](12-04-configure-workers.md)     | P0       | [T12.01](12-01-setup-iac.md), [T13.01](../13-operations/13-01-async-job-queues.md)  |

[Back to task index](../README.md)
