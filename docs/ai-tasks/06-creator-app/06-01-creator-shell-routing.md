# T06.01 — Creator shell and routing

| Field | Value |
| --- | --- |
| Phase | [06 — Creator application](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T00.28](../00-foundation/00-28-creator-app-bootstrap.md), [T04.02](../04-design-system/04-02-creator-theme.md) |
| Unblocks | [T06.02](06-02-typed-api-client.md), [T06.04](06-04-auth-screens.md), [T06.05](06-05-dashboard.md), [T06.07](06-07-studio-layout.md), [T15.02](../15-testing/15-02-e2e-testing.md) |
| Docs | [DESIGN.md](../../DESIGN.md), [PROJECT.md](../../PROJECT.md) |

## Goal
Application shell with navigation for Create, Invitations, Campaigns, Media, Analytics and Settings.

## Scope
- Route tree with lazy-loaded features.
- Navigation becomes visually secondary during creation.
- Project switcher.

## Deliverables
- `apps/creator/src/app/*`.

## Acceptance criteria
- [ ] Usable at 1280px desktop width and on mobile.
- [ ] No hardcoded strings.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
