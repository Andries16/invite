# T00.25 — API application bootstrap

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T00.12](00-12-config-package.md), [T00.13](00-13-observability-package.md), [T00.14](00-14-contracts-package.md), [T00.04](00-04-adr-api-transport.md) |
| Unblocks | [T00.26](00-26-error-model-http-mapping.md), [T00.30](00-30-health-checks.md), [T01.02](../01-identity-projects/01-02-authentication-integration.md) |
| Docs | [ARCHITECTURE.md](../../ARCHITECTURE.md), [API.md](../../API.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md) |

## Goal
Running API service with request lifecycle scaffolding.

## Scope
- NestJS app with modules per domain.
- Request validation pipe using contracts.
- Correlation ID middleware and structured request logging.
- Global exception filter mapping to the error envelope.

## Deliverables
- `apps/api`.

## Acceptance criteria
- [ ] Invalid input returns `VALIDATION_FAILED` without leaking internals.
- [ ] Startup fails on invalid configuration.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
