# Phase 09 — Generation Pipeline

Implement the pipeline that orchestrates the AI model, enforces capability constraints, and produces validated InvitationSpecs.

**Exit condition:** A robust, isolated generation pipeline that safely produces valid structured data from conversational intent.

| ID     | Task                                                                    | Priority | Depends on                                                                                                                                                                                     |
| ------ | ----------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T09.01 | [Implement Generation Orchestrator](09-01-orchestrator.md)              | P0       | [T07.01](../07-ai-orchestration/07-01-ai-provider-interface.md), [T07.02](../07-ai-orchestration/07-02-ai-provider-adapter.md), [T02.01](../02-invitation-spec/02-01-spec-package-scaffold.md) |
| T09.02 | [Implement Capability Manifest Generator](09-02-capability-manifest.md) | P1       | [T09.01](09-01-orchestrator.md), [T04.01](../04-design-system/04-01-design-tokens.md), [T04.02](../04-design-system/04-02-creator-theme.md)                                                    |
| T09.03 | [Develop Safety & Validation Layer](09-03-safety-validation.md)         | P0       | [T09.01](09-01-orchestrator.md), [T02.02](../02-invitation-spec/02-02-primitive-value-schemas.md)                                                                                              |
| T09.04 | [Build Automated Prompt Testing Suite](09-04-prompt-testing.md)         | P1       | [T09.01](09-01-orchestrator.md), [T09.03](09-03-safety-validation.md)                                                                                                                          |

[Back to task index](../README.md)
