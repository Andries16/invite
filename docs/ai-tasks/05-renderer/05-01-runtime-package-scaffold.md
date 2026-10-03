# T05.01 — Invitation runtime package

| Field | Value |
| --- | --- |
| Phase | [05 — Invitation renderer](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T02.18](../02-invitation-spec/02-18-spec-normalization.md), [T04.08](../04-design-system/04-08-invitation-layout-primitives.md) |
| Unblocks | [T05.02](05-02-component-registry.md), [T05.04](05-04-theme-application.md), [T05.13](05-13-asset-resolution.md), [T05.14](05-14-public-runtime-config.md), [T10.03](../10-campaigns/10-03-personalization-engine.md), [T14.04](../14-security/14-04-ai-isolation.md), [T15.03](../15-testing/15-03-visual-regression.md) |
| Docs | [RENDERING.md](../../RENDERING.md), [ARCHITECTURE.md](../../ARCHITECTURE.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md) |

## Goal
Package for the deterministic renderer with an explicit renderer version.

## Scope
- `packages/invitation-runtime` with `RENDERER_VERSION` constant.
- Entry `renderInvitation(buildInput)` returning a React tree.
- `BuildInput` type: normalized spec, resolved assets, theme, renderer version, public config.

## Deliverables
- `packages/invitation-runtime`.

## Acceptance criteria
- [ ] Package does not import database, storage, queue or AI packages.
- [ ] No control-plane secrets reachable from the package.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
