# T07.02 — First LLM provider adapter

| Field      | Value                                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                                                                                 |
| Status     | `todo`                                                                                                                             |
| Priority   | P0 — MVP critical path                                                                                                             |
| Depends on | [T07.01](07-01-ai-provider-interface.md), [T00.12](../00-foundation/00-12-config-package.md)                                       |
| Unblocks   | [T07.20](07-20-ai-cost-controls.md), [T07.27](07-27-provider-outage.md), [T09.01](../09-generation-pipeline/09-01-orchestrator.md) |
| Docs       | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [ARCHITECTURE.md](../../ARCHITECTURE.md)                                       |

## Goal

Adapter for the chosen model vendor with structured output support.

## Scope

- JSON schema structured output.
- Timeouts, token limits and usage reporting.

## Deliverables

- `packages/ai/providers/<vendor>`.

## Acceptance criteria

- [ ] API keys come only from validated config and are never logged.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Contract tests with recorded fixtures.
