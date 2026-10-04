# T09.01 — Implement Generation Orchestrator

| Field      | Value                                                                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [09 — Generation Pipeline](README.md)                                                                                                                                                          |
| Status     | `todo`                                                                                                                                                                                         |
| Priority   | P0 — MVP critical path                                                                                                                                                                         |
| Depends on | [T07.01](../07-ai-orchestration/07-01-ai-provider-interface.md), [T07.02](../07-ai-orchestration/07-02-ai-provider-adapter.md), [T02.01](../02-invitation-spec/02-01-spec-package-scaffold.md) |
| Unblocks   | [T09.02](09-02-capability-manifest.md), [T09.03](09-03-safety-validation.md), [T09.04](09-04-prompt-testing.md), [T14.04](../14-security/14-04-ai-isolation.md)                                |
| Docs       | [GENERATION.md](../../GENERATION.md), [AI.md](../../AI.md)                                                                                                                                     |

## Goal

Create the central coordinator that takes user conversation intent, invokes the AI model, and maps the output to a structured format.

## Scope

- Intent parsing and mapping.
- AI provider invocation.
- Parsing of structured output into InvitationSpec.

## Deliverables

- Orchestrator module.

## Acceptance criteria

- [ ] Safely transforms input prompt into an object matching InvitationSpec schema.
- [ ] Handles provider timeouts and limits.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
