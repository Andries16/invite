# T14.04 — Establish AI & Renderer Isolation

| Field      | Value                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| Phase      | [14 — Security](README.md)                                                                                            |
| Status     | `todo`                                                                                                                |
| Priority   | P0 — MVP critical path                                                                                                |
| Depends on | [T05.01](../05-renderer/05-01-runtime-package-scaffold.md), [T09.01](../09-generation-pipeline/09-01-orchestrator.md) |
| Unblocks   | —                                                                                                                     |
| Docs       | [SECURITY_MODEL.md](../../SECURITY_MODEL.md)                                                                          |

## Goal

Implement strict network and permission boundaries ensuring the static site renderer and published sites have absolutely zero access to platform secrets or internal APIs.

## Scope

- Network segmentation (VPC subnets).
- IAM roles with least privilege.

## Deliverables

- Security infrastructure definitions.

## Acceptance criteria

- [ ] A compromised renderer process cannot access the database or control plane APIs.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
