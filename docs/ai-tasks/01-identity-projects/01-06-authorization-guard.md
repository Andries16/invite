# T01.06 — Deny-by-default authorization

| Field | Value |
| --- | --- |
| Phase | [01 — Identity and projects](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T01.05](01-05-membership-roles.md), [T01.02](01-02-authentication-integration.md) |
| Unblocks | [T01.07](01-07-project-api.md), [T01.09](01-09-audit-log.md), [T03.05](../03-invitation-domain/03-05-create-invitation-use-case.md), [T08.02](../08-assets/08-02-upload-intent.md) |
| Docs | [SECURITY.md](../../SECURITY.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md), [API.md](../../API.md) |

## Goal
Server-side authorization for every tenant-owned operation.

## Scope
- Flow: authenticate, resolve ownership, authorize, execute.
- Resource resolver loading the real projectId from the database, never from the client.
- Guard/decorator usable by every controller.

## Deliverables
- Authorization module in `apps/api` and policy functions in `packages/domain`.

## Acceptance criteria
- [ ] Endpoints without an explicit policy fail closed.
- [ ] Client-supplied projectId is never trusted as proof of access.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Authorization bypass tests across projects.
