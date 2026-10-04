# T07.01 — AI provider interface

| Field      | Value                                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [07 — AI orchestration](README.md)                                                                                                                                             |
| Status     | `todo`                                                                                                                                                                         |
| Priority   | P0 — MVP critical path                                                                                                                                                         |
| Depends on | [T00.11](../00-foundation/00-11-shared-package.md), [T00.01](../00-foundation/00-01-resolve-documentation-conflicts.md)                                                        |
| Unblocks   | [T07.02](07-02-ai-provider-adapter.md), [T07.03](07-03-fake-ai-provider.md), [T07.07](07-07-prompt-architecture.md), [T09.01](../09-generation-pipeline/09-01-orchestrator.md) |
| Docs       | [AI.md](../../AI.md), [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md)                                                                                                       |

## Goal

Vendor-neutral provider port for structured generation.

## Scope

- `generateStructured<T>(request)` with schema, messages layered by role, limits, timeout and metadata.
- Typed failure results: timeout, rate-limited, provider-unavailable, invalid-output, refused.
- Domain never imports vendor SDK types.

## Deliverables

- `packages/ai/provider`.

## Acceptance criteria

- [ ] Provider errors never leak to clients.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for request building and error mapping.
