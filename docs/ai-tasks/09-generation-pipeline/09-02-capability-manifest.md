# T09.02 — Implement Capability Manifest Generator

| Field      | Value                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [09 — Generation Pipeline](README.md)                                                                                                       |
| Status     | `todo`                                                                                                                                      |
| Priority   | P1 — MVP / production readiness                                                                                                             |
| Depends on | [T09.01](09-01-orchestrator.md), [T04.01](../04-design-system/04-01-design-tokens.md), [T04.02](../04-design-system/04-02-creator-theme.md) |
| Unblocks   | [T06.12](../06-creator-app/06-12-generation-progress-ui.md)                                                                                 |
| Docs       | [GENERATION.md](../../GENERATION.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)                                                            |

## Goal

Build a dynamic manifest generator that tells the AI exactly what themes, components, and motion limits are currently supported by the design system.

## Scope

- Extracting available properties from design system tokens.
- Generating a JSON schema or prompt segment dynamically.

## Deliverables

- Manifest generator module.

## Acceptance criteria

- [ ] The manifest accurately reflects current supported design features.
- [ ] Ensures the AI doesn't hallucinate unsupported capabilities.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
