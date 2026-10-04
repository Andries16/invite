# T13.02 — Integrate Logging and Metrics

| Field      | Value                                             |
| ---------- | ------------------------------------------------- |
| Phase      | [13 — Operations & Queues](README.md)             |
| Status     | `todo`                                            |
| Priority   | P0 — MVP critical path                            |
| Depends on | [T12.01](../12-infrastructure/12-01-setup-iac.md) |
| Unblocks   | [T13.03](13-03-alerting-rules.md)                 |
| Docs       | [OPERATIONS.md](../../OPERATIONS.md)              |

## Goal

Configure structured logging and metrics collection across all services, sending data to a centralized observability platform.

## Scope

- Logger implementation (e.g., Pino) outputting JSON.
- Integration with Datadog/NewRelic or open-source stack.

## Deliverables

- Observability middleware and configuration.

## Acceptance criteria

- [ ] All services produce consistent, structured logs and performance metrics.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
