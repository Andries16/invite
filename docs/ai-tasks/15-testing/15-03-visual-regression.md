# T15.03 — Configure Visual Regression Testing

| Field      | Value                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------- |
| Phase      | [15 — Testing](README.md)                                                                                        |
| Status     | `todo`                                                                                                           |
| Priority   | P1 — MVP / production readiness                                                                                  |
| Depends on | [T04.02](../04-design-system/04-02-creator-theme.md), [T05.01](../05-renderer/05-01-runtime-package-scaffold.md) |
| Unblocks   | —                                                                                                                |
| Docs       | [TESTING.md](../../TESTING.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)                                       |

## Goal

Set up visual snapshot testing for the design system components and generated static invitations to catch unintended CSS changes.

## Scope

- Storybook integration or Percy/Chromatic setup.
- Automated snapshot comparisons.

## Deliverables

- Visual regression suite.

## Acceptance criteria

- [ ] UI changes trigger review of visual diffs in PRs.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
