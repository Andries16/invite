# T00.28 — Creator application bootstrap

| Field      | Value                                                                                                          |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                                   |
| Status     | `todo`                                                                                                         |
| Priority   | P0 — MVP critical path                                                                                         |
| Depends on | [T00.10](00-10-lint-and-format-rules.md), [T00.17](00-17-translations-package.md)                              |
| Unblocks   | [T06.01](../06-creator-app/06-01-creator-shell-routing.md)                                                     |
| Docs       | [ARCHITECTURE.md](../../ARCHITECTURE.md), [DESIGN.md](../../DESIGN.md), [CONVENTIONS.md](../../CONVENTIONS.md) |

## Goal

Running React + TypeScript + Vite creator app.

## Scope

- Vite config, routing library, translations provider, error boundary.
- Folder structure: `features/`, `components/`, `hooks/`, `api/`.

## Deliverables

- `apps/creator`.

## Acceptance criteria

- [ ] All components are const arrow functions.
- [ ] No hardcoded user-facing strings.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
