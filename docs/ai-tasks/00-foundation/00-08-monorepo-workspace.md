# T00.08 — Monorepo workspace

| Field      | Value                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [00 — Foundation](README.md)                                                                                                   |
| Status     | `todo`                                                                                                                         |
| Priority   | P0 — MVP critical path                                                                                                         |
| Depends on | [T00.02](00-02-adr-monorepo-tooling.md)                                                                                        |
| Unblocks   | [T00.09](00-09-typescript-strict-config.md), [T00.18](00-18-local-dev-environment.md)                                          |
| Docs       | [ARCHITECTURE.md](../../ARCHITECTURE.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [CONVENTIONS.md](../../CONVENTIONS.md) |

## Goal

Create the monorepo skeleton with apps and packages per the resolved layout.

## Scope

- Root workspace configuration and task runner pipelines (build, typecheck, lint, test).
- Empty app folders: `apps/creator`, `apps/api`, `apps/worker`.
- Empty package folders per README package naming.
- `.gitignore`, `.editorconfig`, `.nvmrc` / engines.

## Deliverables

- Root `package.json`, workspace config, task runner config.

## Acceptance criteria

- [ ] `install`, `build`, `typecheck`, `lint` and `test` run from the root.
- [ ] All folders and files are kebab-case.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
