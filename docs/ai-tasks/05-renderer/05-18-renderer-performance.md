# T05.18 — Minimal JavaScript output

| Field      | Value                                                                  |
| ---------- | ---------------------------------------------------------------------- |
| Phase      | [05 — Invitation renderer](README.md)                                  |
| Status     | `todo`                                                                 |
| Priority   | P1 — MVP / production readiness                                        |
| Depends on | [T05.03](05-03-page-composition.md)                                    |
| Unblocks   | —                                                                      |
| Docs       | [RENDERING.md](../../RENDERING.md), [TEST_PLAN.md](../../TEST_PLAN.md) |

## Goal

Static HTML with hydration only for interactive islands.

## Scope

- Island hydration for RSVP, quiz, reveal, gallery, countdown, music.
- Non-interactive sections ship no JavaScript.

## Deliverables

- Island registry and hydration entry.

## Acceptance criteria

- [ ] Fixture without interactive sections ships no framework runtime.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
