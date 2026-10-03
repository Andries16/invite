# T05.06 — Narrative components

| Field | Value |
| --- | --- |
| Phase | [05 — Invitation renderer](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T05.03](05-03-page-composition.md), [T02.07](../02-invitation-spec/02-07-narrative-section-schemas.md) |
| Unblocks | [T05.19](05-19-renderer-golden-tests.md) |
| Docs | [DESIGN.md](../../DESIGN.md) |

## Goal
Text, quote, story/memory, timeline and footer components.

## Deliverables
- `components/{text,quote,story,timeline,footer}/*`.

## Acceptance criteria
- [ ] All text rendered with framework escaping; no `dangerouslySetInnerHTML`.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Render tests including XSS fixtures.
