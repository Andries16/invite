# T00.01 — Resolve documentation conflicts

| Field      | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [00 — Foundation](README.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Status     | `todo`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Depends on | —                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Unblocks   | [T00.02](00-02-adr-monorepo-tooling.md), [T00.03](00-03-adr-database-selection.md), [T00.04](00-04-adr-api-transport.md), [T00.05](00-05-adr-authentication-provider.md), [T00.06](00-06-adr-public-url-convention.md), [T02.01](../02-invitation-spec/02-01-spec-package-scaffold.md), [T03.01](../03-invitation-domain/03-01-invitation-entity.md), [T07.01](../07-ai-orchestration/07-01-ai-provider-interface.md)                                                                                                               |
| Docs       | [README.md](../../../README.md), [ARCHITECTURE.md](../../ARCHITECTURE.md), [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [DESIGN.md](../../DESIGN.md), [PUBLIC_DELIVERY.md](../../PUBLIC_DELIVERY.md), [PRODUCT.md](../../PRODUCT.md), [domain-routing.md](../../domains/domain-routing.md), [generation.md](../../domains/generation.md), [invitations.md](../../domains/invitations.md), [DATA.md](../../DATA.md), [DATA_MODEL.md](../../DATA_MODEL.md), [AI.md](../../AI.md), [AI_IMPLEMENTATION.md](../../AI_IMPLEMENTATION.md) |

## Goal

Resolve every conflict between documents explicitly so later tasks implement one behavior instead of inventing a third.

## Scope

- Repository layout: ARCHITECTURE.md (`invitation-schema`, `invitation-components`, `invitation-generator`) versus IMPLEMENTATION.md (`invitation-spec`, `design-system`, `renderer`).
- Single invitation URL: PUBLIC_DELIVERY.md (`invite.md/i/:slug`) versus PRODUCT.md and domain-routing.md (`maria.invite.md`).
- Generation states: domains/generation.md (`queued/running/succeeded/failed`) versus IMPLEMENTATION.md §7 (`queued/preparing/rendering/building/validating/storing/completed/failed`).
- Invitation lifecycle: domains/invitations.md (`draft/generating/published/failed`) versus IMPLEMENTATION.md §7 publication states.
- Invitation and InvitationVersion fields: DATA.md versus DATA_MODEL.md (`currentVersionId` vs `currentDraftVersionId` + `publishedVersionId`, `schemaVersion` vs `specVersion`).
- AI provider interface: AI.md `AiProvider.generate` versus AI_IMPLEMENTATION.md `AIProvider.generateStructured<T>`.
- DesignSpec location: inside InvitationSpec (`theme`) versus separate `designSpec` field on InvitationVersion.

## Deliverables

- Updated docs with one canonical answer per conflict.
- `docs/adr/` entries for decisions that are expensive to reverse.
- A short "Resolved conflicts" section in ARCHITECTURE.md.

## Acceptance criteria

- [ ] Every conflict above has exactly one documented outcome.
- [ ] No document contradicts another on these topics.
- [ ] README package naming in `docs/ai-tasks/README.md` is updated if layout changes.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Notes

- Ask the product owner when a conflict is a product decision rather than a technical one.
