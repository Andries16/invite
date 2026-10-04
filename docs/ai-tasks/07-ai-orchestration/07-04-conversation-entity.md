# T07.04 — Conversation aggregate

| Field      | Value                                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                                                                                           |
| Status     | `todo`                                                                                                                                       |
| Priority   | P0 — MVP critical path                                                                                                                       |
| Depends on | [T00.15](../00-foundation/00-15-domain-package.md), [T03.01](../03-invitation-domain/03-01-invitation-entity.md)                             |
| Unblocks   | [T07.05](07-05-message-persistence.md), [T07.09](07-09-fact-extraction.md), [T07.19](07-19-context-budgeting.md)                             |
| Docs       | [conversations.md](../../domains/conversations.md), [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [DATA_MODEL.md](../../DATA_MODEL.md) |

## Goal

Structured conversation state separate from InvitationSpec.

## Scope

- Fields: id, projectId, invitationId, phase (occasion, story, visual, experience, refinement, publication), status (active, waiting-for-input, generating, completed, archived), extracted facts, unanswered questions, design brief, current spec revision, pending proposals, user decisions, provider metadata, timestamps.
- State machine for status.

## Deliverables

- `packages/domain/conversation`, repository, migration.

## Acceptance criteria

- [ ] Spec is never reconstructed by replaying the transcript.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for transitions.
