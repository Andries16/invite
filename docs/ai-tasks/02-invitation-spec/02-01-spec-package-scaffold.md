# T02.01 — InvitationSpec package and versioning

| Field      | Value                                                                                                                                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [02 — InvitationSpec](README.md)                                                                                                                                                                                                                                                |
| Status     | `todo`                                                                                                                                                                                                                                                                          |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                                                          |
| Depends on | [T00.11](../00-foundation/00-11-shared-package.md), [T00.01](../00-foundation/00-01-resolve-documentation-conflicts.md)                                                                                                                                                         |
| Unblocks   | [T02.02](02-02-primitive-value-schemas.md), [T02.21](02-21-spec-migrations.md), [T03.02](../03-invitation-domain/03-02-invitation-version-entity.md), [T07.06](../07-ai-orchestration/07-06-interaction-protocol.md), [T09.01](../09-generation-pipeline/09-01-orchestrator.md) |
| Docs       | [DATA.md](../../DATA.md), [DATA_MODEL.md](../../DATA_MODEL.md), [ADR-002-invitation-spec.md](../../adr/ADR-002-invitation-spec.md), [RENDERING.md](../../RENDERING.md)                                                                                                          |

## Goal

Dedicated, versioned package owning the canonical InvitationSpec schema.

## Scope

- Package `packages/invitation-spec` with `specVersion: "1"` literal.
- Versioned folder layout (`v1/`) and a public entry exporting the current version.
- Root `InvitationSpec` Zod schema skeleton and inferred type.

## Deliverables

- `packages/invitation-spec`.

## Acceptance criteria

- [ ] Unknown `specVersion` is rejected.
- [ ] Types are inferred from schemas, not handwritten twice.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests for version detection.
