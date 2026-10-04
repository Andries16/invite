# T00.16 — Testing utilities and synthetic fixtures

| Field      | Value                                                                                                                                                     |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                                                                              |
| Status     | `todo`                                                                                                                                                    |
| Priority   | P0 — MVP critical path                                                                                                                                    |
| Depends on | [T00.09](00-09-typescript-strict-config.md)                                                                                                               |
| Unblocks   | [T00.29](00-29-ci-pipeline.md), [T02.23](../02-invitation-spec/02-23-golden-spec-fixtures.md), [T07.03](../07-ai-orchestration/07-03-fake-ai-provider.md) |
| Docs       | [TESTING.md](../../TESTING.md), [TEST_PLAN.md](../../TEST_PLAN.md)                                                                                        |

## Goal

Shared test setup, factories and synthetic data.

## Scope

- Test runner configuration shared across workspaces.
- Factories for users, projects, invitations, specs, assets and recipients with synthetic data only.
- Fake clock and deterministic ID generator.

## Deliverables

- `packages/testing`.

## Acceptance criteria

- [ ] No real personal data in fixtures.
- [ ] Factories produce schema-valid objects.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
