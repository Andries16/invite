# T06.08 — Live preview

| Field      | Value                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [06 — Creator application](README.md)                                                                                                                                                |
| Status     | `todo`                                                                                                                                                                               |
| Priority   | P0 — MVP critical path                                                                                                                                                               |
| Depends on | [T06.07](06-07-studio-layout.md), [T05.19](../05-renderer/05-19-renderer-golden-tests.md)                                                                                            |
| Unblocks   | [T06.09](06-09-spec-dev-playground.md), [T06.13](06-13-pre-publish-review.md), [T06.18](06-18-creator-responsive-a11y.md), [T07.25](../07-ai-orchestration/07-25-patch-review-ui.md) |
| Docs       | [DESIGN.md](../../DESIGN.md), [RENDERING.md](../../RENDERING.md)                                                                                                                     |

## Goal

Render the current normalized spec with the production renderer inside an isolated frame.

## Scope

- Sandboxed iframe with message protocol.
- Device modes: desktop, tablet, mobile.
- Hot update on new version without full reload.
- Preview asset resolver using authenticated or signed URLs.

## Deliverables

- `features/studio/preview/*` and preview host entry.

## Acceptance criteria

- [ ] Editor chrome never appears inside the invitation frame.
- [ ] Preview and production use the same components.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
