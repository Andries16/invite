# T06.09 — Spec playground for manual specs

| Field      | Value                                 |
| ---------- | ------------------------------------- |
| Phase      | [06 — Creator application](README.md) |
| Status     | `todo`                                |
| Priority   | P1 — MVP / production readiness       |
| Depends on | [T06.08](06-08-live-preview.md)       |
| Unblocks   | —                                     |
| Docs       | [ROADMAP.md](../../ROADMAP.md)        |

## Goal

Developer/admin view to load and edit a spec JSON and preview it (Phase 1 exit condition).

## Scope

- JSON editor with validation issues listed.
- Load golden fixtures.
- Behind a feature flag.

## Deliverables

- `features/spec-playground/*`.

## Acceptance criteria

- [ ] Invalid specs show issues and never render.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
