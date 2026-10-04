# T04.11 — Typography system and font registry

| Field      | Value                                                                    |
| ---------- | ------------------------------------------------------------------------ |
| Phase      | [04 — Design system](README.md)                                          |
| Status     | `todo`                                                                   |
| Priority   | P0 — MVP critical path                                                   |
| Depends on | [T04.01](04-01-design-tokens.md)                                         |
| Unblocks   | [T04.14](04-14-theme-contract-registry.md)                               |
| Docs       | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md) |

## Goal

Approved font registry with pairings and licensing metadata.

## Scope

- Registry entries: family, license, source, weights, subsets, fallback stack.
- Pairing directions: modern sans + serif, editorial serif + sans, handwritten accent + sans, luxury serif, geometric sans, mono accent.
- Max two primary families plus one decorative accent.
- Self-hosted compressed font files for artifacts.

## Deliverables

- `packages/design-system/typography`.

## Acceptance criteria

- [ ] Fonts not in the registry are rejected.
- [ ] Licensing is recorded for every font.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for pairing limits.
