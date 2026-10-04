# T07.27 — Provider outage and failover

| Field      | Value                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------- |
| Phase      | [07 — AI orchestration](README.md)                                                       |
| Status     | `todo`                                                                                   |
| Priority   | P1 — MVP / production readiness                                                          |
| Depends on | [T07.02](07-02-ai-provider-adapter.md), [T07.21](07-21-ai-job-integration.md)            |
| Unblocks   | —                                                                                        |
| Docs       | [OPERATIONS.md](../../OPERATIONS.md), [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md) |

## Goal

Degrade gracefully when the provider is unavailable.

## Scope

- Queue or retry, preserve drafts, optional approved fallback provider.

## Deliverables

- Failover policy.

## Acceptance criteria

- [ ] Public invitations and drafts unaffected by AI outage.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
