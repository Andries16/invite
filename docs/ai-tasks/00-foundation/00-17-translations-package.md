# T00.17 — Translations package

| Field      | Value                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                              |
| Status     | `todo`                                                                                                    |
| Priority   | P0 — MVP critical path                                                                                    |
| Depends on | [T00.09](00-09-typescript-strict-config.md)                                                               |
| Unblocks   | [T00.28](00-28-creator-app-bootstrap.md), [T04.03](../04-design-system/04-03-creator-input-components.md) |
| Docs       | [CONVENTIONS.md](../../CONVENTIONS.md), [PRODUCT.md](../../PRODUCT.md)                                    |

## Goal

Typed translation keys for every user-facing creator string.

## Scope

- Typed key catalog with compile-time key checking.
- Initial locales (`en` plus `ro` if confirmed by product).
- Interpolation with escaping and pluralization.
- React hook and provider for the creator.

## Deliverables

- `packages/translations`.

## Acceptance criteria

- [ ] Unknown key fails typecheck.
- [ ] Missing translation in a non-default locale is reported by a script.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for interpolation, pluralization and fallback.
