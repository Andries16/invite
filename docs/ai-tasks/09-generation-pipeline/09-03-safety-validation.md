# T09.03 — Develop Safety & Validation Layer

| Field | Value |
| --- | --- |
| Phase | [09 — Generation Pipeline](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T09.01](09-01-orchestrator.md), [T02.02](../02-invitation-spec/02-02-primitive-value-schemas.md) |
| Unblocks | [T09.04](09-04-prompt-testing.md) |
| Docs | [GENERATION.md](../../GENERATION.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md) |

## Goal
Implement rigorous validation that ensures the AI-generated structured output adheres perfectly to the InvitationSpec and contains no harmful or unsupported properties.

## Scope
- Zod schema validation against InvitationSpec.
- Sanitizing rich text and input strings.

## Deliverables
- Validation middleware/service.

## Acceptance criteria
- [ ] Invalid or malicious payloads are rejected or gracefully stripped.
- [ ] Output always matches versioned schema.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
