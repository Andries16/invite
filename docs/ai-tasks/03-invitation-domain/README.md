# Phase 03 — Invitation domain

Invitation as stable logical identity, immutable InvitationVersions, slugs, optimistic concurrency, patch application and version history.

**Exit condition:** A manually created InvitationSpec can be stored as a version, patched with revision checks and restored from history through the API.

| ID     | Task                                                             | Priority | Depends on                                                                                                                                                                         |
| ------ | ---------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T03.01 | [Invitation entity and lifecycle](03-01-invitation-entity.md)    | P0       | [T00.15](../00-foundation/00-15-domain-package.md), [T00.01](../00-foundation/00-01-resolve-documentation-conflicts.md), [T01.04](../01-identity-projects/01-04-project-entity.md) |
| T03.02 | [InvitationVersion entity](03-02-invitation-version-entity.md)   | P0       | [T03.01](03-01-invitation-entity.md), [T02.01](../02-invitation-spec/02-01-spec-package-scaffold.md)                                                                               |
| T03.03 | [Invitation repositories](03-03-invitation-repositories.md)      | P0       | [T03.01](03-01-invitation-entity.md), [T03.02](03-02-invitation-version-entity.md), [T00.19](../00-foundation/00-19-database-package.md)                                           |
| T03.04 | [Slug generation and validation](03-04-slug-service.md)          | P0       | [T03.01](03-01-invitation-entity.md), [T00.06](../00-foundation/00-06-adr-public-url-convention.md)                                                                                |
| T03.05 | [CreateInvitation use case](03-05-create-invitation-use-case.md) | P0       | [T03.03](03-03-invitation-repositories.md), [T03.04](03-04-slug-service.md), [T01.06](../01-identity-projects/01-06-authorization-guard.md)                                        |
| T03.06 | [Invitation API](03-06-invitation-api.md)                        | P0       | [T03.05](03-05-create-invitation-use-case.md)                                                                                                                                      |
| T03.07 | [ApplyInvitationPatch use case](03-07-apply-patch-use-case.md)   | P0       | [T03.06](03-06-invitation-api.md), [T02.20](../02-invitation-spec/02-20-spec-patch-operations.md)                                                                                  |
| T03.08 | [Replace draft spec use case](03-08-replace-spec-use-case.md)    | P1       | [T03.06](03-06-invitation-api.md)                                                                                                                                                  |
| T03.09 | [Version history and restore](03-09-version-history.md)          | P0       | [T03.07](03-07-apply-patch-use-case.md)                                                                                                                                            |
| T03.10 | [Invitation domain events](03-10-invitation-domain-events.md)    | P1       | [T03.05](03-05-create-invitation-use-case.md), [T00.22](../00-foundation/00-22-outbox-dispatcher.md)                                                                               |
| T03.11 | [Invitation deletion lifecycle](03-11-invitation-deletion.md)    | P1       | [T03.06](03-06-invitation-api.md), [T01.09](../01-identity-projects/01-09-audit-log.md)                                                                                            |

[Back to task index](../README.md)
