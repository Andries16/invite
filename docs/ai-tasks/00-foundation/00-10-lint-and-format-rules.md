# T00.10 — Lint rules enforcing conventions

| Field      | Value                                                                    |
| ---------- | ------------------------------------------------------------------------ |
| Phase      | [00 — Foundation](README.md)                                             |
| Status     | `todo`                                                                   |
| Priority   | P0 — MVP critical path                                                   |
| Depends on | [T00.09](00-09-typescript-strict-config.md)                              |
| Unblocks   | [T00.28](00-28-creator-app-bootstrap.md), [T00.29](00-29-ci-pipeline.md) |
| Docs       | [CONVENTIONS.md](../../CONVENTIONS.md)                                   |

## Goal

Enforce the mandatory coding rules automatically.

## Scope

- `@typescript-eslint/no-explicit-any`, `no-unsafe-*`, `consistent-type-assertions` (disallow `as` except `as const`), `no-non-null-assertion`, ban `@ts-ignore`/`@ts-expect-error`.
- `react/function-component-definition` forcing arrow functions; disallow class components.
- `max-lines` 500 per file.
- Kebab-case filenames and folders (e.g. `eslint-plugin-check-file` or `unicorn/filename-case`).
- Rule or custom plugin rejecting code comments.
- `react-hooks` rules; import ordering; Prettier formatting.

## Deliverables

- Shared ESLint config package and Prettier config.

## Acceptance criteria

- [ ] Fixture files violating each rule fail lint.
- [ ] Root lint passes on a clean tree.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Lint rule fixture tests for each mandatory rule.
