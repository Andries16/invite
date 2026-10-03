# T00.02 — ADR: monorepo and package tooling

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T00.01](00-01-resolve-documentation-conflicts.md) |
| Unblocks | [T00.08](00-08-monorepo-workspace.md) |
| Docs | [ARCHITECTURE.md](../../ARCHITECTURE.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [CONVENTIONS.md](../../CONVENTIONS.md), [README.md](../../adr/README.md) |

## Goal
Decide package manager, workspace tool and task runner for the monorepo.

## Scope
- Compare pnpm workspaces, and Yarn; Turborepo versus Nx versus plain scripts.
- Decide TypeScript project references versus bundler-only builds.
- Decide test runner (Vitest recommended for Vite alignment).

## Deliverables
- `docs/adr/ADR-007-monorepo-tooling.md`.
- ADR index updated in `docs/adr/README.md`.

## Acceptance criteria
- [ ] ADR states context, decision, consequences and alternatives.
- [ ] Decision covers package manager, task runner, test runner and build strategy.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
