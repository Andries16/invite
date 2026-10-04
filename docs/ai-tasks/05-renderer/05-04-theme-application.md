# T05.04 — Theme application

| Field      | Value                                                                                                          |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| Phase      | [05 — Invitation renderer](README.md)                                                                          |
| Status     | `todo`                                                                                                         |
| Priority   | P0 — MVP critical path                                                                                         |
| Depends on | [T05.01](05-01-runtime-package-scaffold.md), [T04.14](../04-design-system/04-14-theme-contract-registry.md)    |
| Unblocks   | [T11.01](../11-public-delivery/11-01-cdn-setup.md), [T11.02](../11-public-delivery/11-02-immutable-storage.md) |
| Docs       | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)                                       |

## Goal

Apply resolved theme tokens as CSS custom properties scoped to the invitation root.

## Scope

- Token to CSS variable mapping.
- Font-face declarations for registered fonts.

## Deliverables

- `theme/*`.

## Acceptance criteria

- [ ] No raw CSS from the spec is emitted.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
