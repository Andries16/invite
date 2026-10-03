# Phase 07 — AI orchestration

Provider-neutral AI layer, conversation state, typed interaction protocol, fact extraction, question strategy, DesignBrief, spec generation, structured edits, safety, cost controls, evaluation and the conversation UI.

**Exit condition:** A user can create and revise an invitation conversationally; every AI output is validated before it changes the spec.

| ID | Task | Priority | Depends on |
| --- | --- | --- | --- |
| T07.01 | [AI provider interface](07-01-ai-provider-interface.md) | P0 | [T00.11](../00-foundation/00-11-shared-package.md), [T00.01](../00-foundation/00-01-resolve-documentation-conflicts.md) |
| T07.02 | [First LLM provider adapter](07-02-ai-provider-adapter.md) | P0 | [T07.01](07-01-ai-provider-interface.md), [T00.12](../00-foundation/00-12-config-package.md) |
| T07.03 | [Deterministic fake provider](07-03-fake-ai-provider.md) | P0 | [T07.01](07-01-ai-provider-interface.md), [T00.16](../00-foundation/00-16-testing-package.md) |
| T07.04 | [Conversation aggregate](07-04-conversation-entity.md) | P0 | [T00.15](../00-foundation/00-15-domain-package.md), [T03.01](../03-invitation-domain/03-01-invitation-entity.md) |
| T07.05 | [Messages and interaction records](07-05-message-persistence.md) | P0 | [T07.04](07-04-conversation-entity.md) |
| T07.06 | [Typed interaction protocol](07-06-interaction-protocol.md) | P0 | [T02.01](../02-invitation-spec/02-01-spec-package-scaffold.md) |
| T07.07 | [Prompt architecture](07-07-prompt-architecture.md) | P0 | [T07.01](07-01-ai-provider-interface.md) |
| T07.08 | [Capability manifest in AI context](07-08-capability-context.md) | P0 | [T07.07](07-07-prompt-architecture.md), [T04.19](../04-design-system/04-19-capability-manifest.md) |
| T07.09 | [Structured fact extraction](07-09-fact-extraction.md) | P0 | [T07.07](07-07-prompt-architecture.md), [T07.04](07-04-conversation-entity.md), [T02.03](../02-invitation-spec/02-03-metadata-people-event-schemas.md) |
| T07.10 | [Question strategy and stop condition](07-10-question-planner.md) | P0 | [T07.09](07-09-fact-extraction.md), [T07.06](07-06-interaction-protocol.md) |
| T07.11 | [DesignBrief generation](07-11-design-brief.md) | P0 | [T07.09](07-09-fact-extraction.md) |
| T07.12 | [DesignBrief to DesignSpec mapping](07-12-brief-to-design-spec.md) | P0 | [T07.11](07-11-design-brief.md), [T04.14](../04-design-system/04-14-theme-contract-registry.md), [T02.12](../02-invitation-spec/02-12-design-spec-schema.md) |
| T07.13 | [Initial spec generation](07-13-initial-spec-generation.md) | P0 | [T07.12](07-12-brief-to-design-spec.md), [T07.10](07-10-question-planner.md), [T03.08](../03-invitation-domain/03-08-replace-spec-use-case.md) |
| T07.14 | [Natural language edits to patches](07-14-nl-edit-to-patch.md) | P0 | [T07.13](07-13-initial-spec-generation.md), [T03.07](../03-invitation-domain/03-07-apply-patch-use-case.md) |
| T07.15 | [Decision provenance and precedence](07-15-decision-provenance.md) | P0 | [T07.09](07-09-fact-extraction.md) |
| T07.16 | [Narrow AI tools](07-16-ai-tools.md) | P1 | [T07.07](07-07-prompt-architecture.md), [T03.07](../03-invitation-domain/03-07-apply-patch-use-case.md) |
| T07.17 | [Validation, bounded repair and retry](07-17-output-repair-retry.md) | P0 | [T07.13](07-13-initial-spec-generation.md) |
| T07.18 | [Prompt injection defenses](07-18-prompt-injection-defense.md) | P0 | [T07.07](07-07-prompt-architecture.md) |
| T07.19 | [Context summarization and budgeting](07-19-context-budgeting.md) | P1 | [T07.04](07-04-conversation-entity.md), [T07.07](07-07-prompt-architecture.md) |
| T07.20 | [AI cost controls](07-20-ai-cost-controls.md) | P1 | [T07.02](07-02-ai-provider-adapter.md) |
| T07.21 | [Async AI jobs](07-21-ai-job-integration.md) | P0 | [T07.13](07-13-initial-spec-generation.md), [T00.27](../00-foundation/00-27-worker-app-bootstrap.md) |
| T07.22 | [Conversation API](07-22-conversation-api.md) | P0 | [T07.05](07-05-message-persistence.md), [T07.21](07-21-ai-job-integration.md) |
| T07.23 | [Conversation UI](07-23-conversation-ui.md) | P0 | [T07.22](07-22-conversation-api.md), [T06.07](../06-creator-app/06-07-studio-layout.md) |
| T07.24 | [Interaction block renderers](07-24-interaction-block-renderers.md) | P0 | [T07.23](07-23-conversation-ui.md), [T07.06](07-06-interaction-protocol.md) |
| T07.25 | [Patch review and undo](07-25-patch-review-ui.md) | P0 | [T07.24](07-24-interaction-block-renderers.md), [T06.08](../06-creator-app/06-08-live-preview.md) |
| T07.26 | [AI evaluation harness](07-26-ai-evaluation-harness.md) | P0 | [T07.03](07-03-fake-ai-provider.md), [T07.13](07-13-initial-spec-generation.md), [T07.14](07-14-nl-edit-to-patch.md) |
| T07.27 | [Provider outage and failover](07-27-provider-outage.md) | P1 | [T07.02](07-02-ai-provider-adapter.md), [T07.21](07-21-ai-job-integration.md) |
| T07.28 | [Multilingual conversation and copy](07-28-multilingual-copy.md) | P1 | [T07.13](07-13-initial-spec-generation.md) |

[Back to task index](../README.md)
