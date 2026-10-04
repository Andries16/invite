# T12.03 — Setup Caching Layer

| Field      | Value                                                |
| ---------- | ---------------------------------------------------- |
| Phase      | [12 — Infrastructure](README.md)                     |
| Status     | `todo`                                               |
| Priority   | P0 — MVP critical path                               |
| Depends on | [T12.01](12-01-setup-iac.md)                         |
| Unblocks   | [T13.01](../13-operations/13-01-async-job-queues.md) |
| Docs       | [INFRASTRUCTURE.md](../../INFRASTRUCTURE.md)         |

## Goal

Deploy Redis or Memcached clusters for session management, fast lookups, and queue backends.

## Scope

- Cache cluster provisioning (e.g., ElastiCache).

## Deliverables

- Cache IaC modules.

## Acceptance criteria

- [ ] Application and queue workers can connect and utilize the cache efficiently.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
