# T12.04 — Configure Worker Nodes

| Field      | Value                                                                              |
| ---------- | ---------------------------------------------------------------------------------- |
| Phase      | [12 — Infrastructure](README.md)                                                   |
| Status     | `todo`                                                                             |
| Priority   | P0 — MVP critical path                                                             |
| Depends on | [T12.01](12-01-setup-iac.md), [T13.01](../13-operations/13-01-async-job-queues.md) |
| Unblocks   | —                                                                                  |
| Docs       | [INFRASTRUCTURE.md](../../INFRASTRUCTURE.md)                                       |

## Goal

Provision dedicated compute resources specifically for asynchronous tasks like media processing and static site generation.

## Scope

- Auto-scaling worker node groups.
- Resource allocation (CPU/Memory) tuning.

## Deliverables

- Worker node IaC modules.

## Acceptance criteria

- [ ] Workers seamlessly scale based on queue depth metrics.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
