# T05.19 — Renderer golden tests

| Field | Value |
| --- | --- |
| Phase | [05 — Invitation renderer](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T05.05](05-05-hero-component.md), [T05.06](05-06-narrative-components.md), [T05.07](05-07-media-components.md), [T05.08](05-08-event-components.md), [T05.09](05-09-interactive-components.md), [T05.11](05-11-utility-components.md), [T02.23](../02-invitation-spec/02-23-golden-spec-fixtures.md) |
| Unblocks | [T06.08](../06-creator-app/06-08-live-preview.md) |
| Docs | [TEST_PLAN.md](../../TEST_PLAN.md), [TESTING.md](../../TESTING.md) |

## Goal
Render every golden fixture and assert structural invariants.

## Scope
- Known component tree, theme application, asset resolution, metadata.
- Rejection tests for unknown components and invalid props.

## Deliverables
- Renderer test suite.

## Acceptance criteria
- [ ] Suite runs in CI on every renderer or design-system change.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
