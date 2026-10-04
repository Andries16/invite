# T05.02 — Trusted component registry

| Field      | Value                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------- |
| Phase      | [05 — Invitation renderer](README.md)                                                                    |
| Status     | `todo`                                                                                                   |
| Priority   | P0 — MVP critical path                                                                                   |
| Depends on | [T05.01](05-01-runtime-package-scaffold.md)                                                              |
| Unblocks   | [T04.19](../04-design-system/04-19-capability-manifest.md), [T05.03](05-03-page-composition.md)          |
| Docs       | [RENDERING.md](../../RENDERING.md), [ADR-006-ai-code-boundary.md](../../adr/ADR-006-ai-code-boundary.md) |

## Goal

Map stable section types to trusted implementations.

## Scope

- Typed registry keyed by section type; exhaustive over the section union.
- Unknown types fail at validation and never reach render.
- Registry metadata used by the capability manifest.

## Deliverables

- `registry/*`.

## Acceptance criteria

- [ ] Adding a section type without a component fails typecheck.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Test that every section type resolves to a component.
