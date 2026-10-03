# T01.03 — Session security and CSRF

| Field | Value |
| --- | --- |
| Phase | [01 — Identity and projects](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T01.02](01-02-authentication-integration.md) |
| Unblocks | — |
| Docs | [SECURITY.md](../../SECURITY.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md) |

## Goal
Harden creator sessions.

## Scope
- Secure, HttpOnly, SameSite cookies where cookies are used.
- CSRF protection for state-changing requests where applicable.
- Server-side session invalidation (single session and all sessions).

## Deliverables
- Session configuration and CSRF middleware.

## Acceptance criteria
- [ ] Cross-site state-changing requests are rejected.
- [ ] Invalidated sessions cannot be reused.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Integration tests for CSRF and invalidation.
