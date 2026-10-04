# T00.13 — Structured logging and correlation

| Field      | Value                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                                           |
| Status     | `todo`                                                                                                                 |
| Priority   | P0 — MVP critical path                                                                                                 |
| Depends on | [T00.12](00-12-config-package.md)                                                                                      |
| Unblocks   | [T00.25](00-25-api-app-bootstrap.md), [T00.27](00-27-worker-app-bootstrap.md)                                          |
| Docs       | [CONVENTIONS.md](../../CONVENTIONS.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [SECURITY.md](../../SECURITY.md) |

## Goal

Structured logger with correlation IDs and secret redaction.

## Scope

- Logger with service, environment, request/job ID and safe entity IDs.
- Correlation ID propagation helpers (async context).
- Redaction of tokens, cookies, passwords, signed URLs and AI keys.
- OpenTelemetry-compatible hooks (tracing added in T15.05).

## Deliverables

- `packages/observability`.

## Acceptance criteria

- [ ] Redaction removes known secret fields and patterns.
- [ ] Every log line contains service, environment and correlation ID when available.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for redaction and context propagation.
