# T04.14 — Theme contract and registry

| Field      | Value                                                                                                                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [04 — Design system](README.md)                                                                                                                                                                                                  |
| Status     | `todo`                                                                                                                                                                                                                           |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                           |
| Depends on | [T04.10](04-10-semantic-palette-contrast.md), [T04.11](04-11-typography-font-registry.md), [T04.12](04-12-motion-engine.md)                                                                                                      |
| Unblocks   | [T04.15](04-15-mvp-themes.md), [T04.19](04-19-capability-manifest.md), [T04.20](04-20-design-versioning.md), [T05.04](../05-renderer/05-04-theme-application.md), [T07.12](../07-ai-orchestration/07-12-brief-to-design-spec.md) |
| Docs       | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)                                                                                                                                                         |

## Goal

Theme as versioned token set plus component defaults.

## Scope

- Theme schema: id, version, palette, typography, spacing scale, radius, motion defaults, imagery defaults, decorative elements.
- Registry with version lookup.
- Resolver from DesignSpec to concrete tokens.

## Deliverables

- `packages/themes` core.

## Acceptance criteria

- [ ] Theme versions are immutable once released.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for resolution and version lookup.
