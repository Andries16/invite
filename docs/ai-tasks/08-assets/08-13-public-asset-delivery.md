# T08.13 — Public asset delivery

| Field | Value |
| --- | --- |
| Phase | [08 — Assets](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T08.05](08-05-image-processing.md) |
| Unblocks | — |
| Docs | [ASSETS.md](../../ASSETS.md), [PUBLIC_DELIVERY.md](../../PUBLIC_DELIVERY.md) |

## Goal
Expose processed variants through controlled, cacheable public paths.

## Scope
- Copy referenced variants into the artifact or a public content-addressed namespace.
- Private originals never publicly enumerable.

## Deliverables
- Public asset publication step.

## Acceptance criteria
- [ ] Public URLs contain no private identifiers beyond content hashes.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
