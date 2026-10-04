# T06.07 — Studio layout

| Field      | Value                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Phase      | [06 — Creator application](README.md)                                                                                                                                                                                    |
| Status     | `todo`                                                                                                                                                                                                                   |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                   |
| Depends on | [T06.01](06-01-creator-shell-routing.md), [T04.05](../04-design-system/04-05-creator-overlay-components.md)                                                                                                              |
| Unblocks   | [T06.08](06-08-live-preview.md), [T06.10](06-10-version-history-ui.md), [T06.12](06-12-generation-progress-ui.md), [T06.18](06-18-creator-responsive-a11y.md), [T07.23](../07-ai-orchestration/07-23-conversation-ui.md) |
| Docs       | [DESIGN.md](../../DESIGN.md), [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md)                                                                                                                                                 |

## Goal

Conversation + Live Preview workspace.

## Scope

- Desktop: header 56–64px, conversation 360–460px, preview fills the rest, minimum preview width ~420px.
- Mobile: conversation first; preview as dedicated screen or sheet.

## Deliverables

- `features/studio/layout/*`.

## Acceptance criteria

- [ ] Does not resemble an enterprise admin dashboard.
- [ ] Layout works from 360px to wide screens.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
