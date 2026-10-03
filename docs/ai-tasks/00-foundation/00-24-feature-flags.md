# T00.24 — Feature flag infrastructure

| Field | Value |
| --- | --- |
| Phase | [00 — Foundation](README.md) |
| Status | `todo` |
| Priority | P1 — MVP / production readiness |
| Depends on | [T00.12](00-12-config-package.md) |
| Unblocks | — |
| Docs | [IMPLEMENTATION.md](../../IMPLEMENTATION.md) |

## Goal
Centralized feature flags for incomplete capabilities.

## Scope
- Typed flag catalog: new renderer, new AI model, new theme engine, campaign variables, public quiz, custom domains.
- Evaluation by environment and project.
- Creator access through a typed hook.

## Deliverables
- Flags module in `packages/config` or `packages/feature-flags`.

## Acceptance criteria
- [ ] Unknown flag names fail typecheck.
- [ ] No scattered environment checks in feature code.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
