# T13.04 — Setup CI/CD Deployment Pipelines

| Field | Value |
| --- | --- |
| Phase | [13 — Operations & Queues](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T12.01](../12-infrastructure/12-01-setup-iac.md), [T15.01](../15-testing/15-01-unit-testing.md) |
| Unblocks | — |
| Docs | [OPERATIONS.md](../../OPERATIONS.md) |

## Goal
Build automated pipelines for testing, building, and deploying the control plane, creator app, and worker services.

## Scope
- GitHub Actions or GitLab CI workflows.
- Environment-specific deployment jobs (Staging, Prod).

## Deliverables
- CI/CD configuration files.

## Acceptance criteria
- [ ] Code merged to main automatically tests and deploys to staging.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
