# T00.09 — Strict TypeScript base configuration

| Field      | Value                                                                                                                                                                                                          |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                                                                                                                                   |
| Status     | `todo`                                                                                                                                                                                                         |
| Priority   | P0 — MVP critical path                                                                                                                                                                                         |
| Depends on | [T00.08](00-08-monorepo-workspace.md)                                                                                                                                                                          |
| Unblocks   | [T00.10](00-10-lint-and-format-rules.md), [T00.11](00-11-shared-package.md), [T00.16](00-16-testing-package.md), [T00.17](00-17-translations-package.md), [T04.01](../04-design-system/04-01-design-tokens.md) |
| Docs       | [CONVENTIONS.md](../../CONVENTIONS.md)                                                                                                                                                                         |

## Goal

Shared strict tsconfig used by every app and package.

## Scope

- `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `noFallthroughCasesInSwitch`, `useUnknownInCatchVariables`.
- Separate bases for node, browser/react and library packages.

## Deliverables

- `packages/config-typescript` or root `tsconfig.base.json` variants.

## Acceptance criteria

- [ ] Every workspace extends the shared base.
- [ ] A deliberate `any` or implicit `any` fails typecheck.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
