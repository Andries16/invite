# T07.18 — Prompt injection defenses

| Field      | Value                                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                                                                                 |
| Status     | `todo`                                                                                                                             |
| Priority   | P0 — MVP critical path                                                                                                             |
| Depends on | [T07.07](07-07-prompt-architecture.md)                                                                                             |
| Unblocks   | —                                                                                                                                  |
| Docs       | [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md), [SECURITY.md](../../SECURITY.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md) |

## Goal

Treat invitation text, filenames, metadata, pasted HTML and imported documents as data.

## Scope

- Content delimiting and escaping in prompts.
- Output validation independent of prompt compliance.
- Injection fixture suite.

## Deliverables

- Defenses and fixtures.

## Acceptance criteria

- [ ] Injection fixtures cannot cause unauthorized tool calls or invalid specs.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Prompt injection evaluation suite.
