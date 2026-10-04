# Phase 01 — Identity and projects

Users, authentication, projects, memberships, deny-by-default authorization and audit logging. Projects are the tenant-like container for every owned resource.

**Exit condition:** An authenticated user can create a project, invite members with roles and every project-scoped request is authorized server-side.

| ID     | Task                                                                | Priority | Depends on                                                                                                                                             |
| ------ | ------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| T01.01 | [User entity and repository](01-01-user-entity.md)                  | P0       | [T00.15](../00-foundation/00-15-domain-package.md), [T00.19](../00-foundation/00-19-database-package.md)                                               |
| T01.02 | [Authentication integration](01-02-authentication-integration.md)   | P0       | [T01.01](01-01-user-entity.md), [T00.05](../00-foundation/00-05-adr-authentication-provider.md), [T00.25](../00-foundation/00-25-api-app-bootstrap.md) |
| T01.03 | [Session security and CSRF](01-03-session-security.md)              | P0       | [T01.02](01-02-authentication-integration.md)                                                                                                          |
| T01.04 | [Project entity](01-04-project-entity.md)                           | P0       | [T00.15](../00-foundation/00-15-domain-package.md), [T00.19](../00-foundation/00-19-database-package.md)                                               |
| T01.05 | [Memberships and roles](01-05-membership-roles.md)                  | P0       | [T01.01](01-01-user-entity.md), [T01.04](01-04-project-entity.md)                                                                                      |
| T01.06 | [Deny-by-default authorization](01-06-authorization-guard.md)       | P0       | [T01.05](01-05-membership-roles.md), [T01.02](01-02-authentication-integration.md)                                                                     |
| T01.07 | [Project API](01-07-project-api.md)                                 | P0       | [T01.06](01-06-authorization-guard.md), [T00.14](../00-foundation/00-14-contracts-package.md)                                                          |
| T01.08 | [Membership management API](01-08-membership-api.md)                | P1       | [T01.07](01-07-project-api.md)                                                                                                                         |
| T01.09 | [Audit log](01-09-audit-log.md)                                     | P1       | [T01.06](01-06-authorization-guard.md)                                                                                                                 |
| T01.10 | [Account and project deletion lifecycle](01-10-account-deletion.md) | P1       | [T01.07](01-07-project-api.md), [T01.09](01-09-audit-log.md)                                                                                           |

[Back to task index](../README.md)
