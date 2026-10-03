# T04.19 — Capability manifest generation

| Field | Value |
| --- | --- |
| Phase | [04 — Design system](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T04.14](04-14-theme-contract-registry.md), [T05.02](../05-renderer/05-02-component-registry.md) |
| Unblocks | [T07.08](../07-ai-orchestration/07-08-capability-context.md) |
| Docs | [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md), [DESIGN_AI.md](../../DESIGN_AI.md), [AI.md](../../AI.md) |

## Goal
Generate the manifest of themes, components, variants and motion levels from the registries.

## Scope
- Manifest schema and generator.
- Versioned manifest tied to renderer version.
- Used by capability validation (T02.17) and AI prompts (T07.08).

## Deliverables
- `packages/invitation-runtime/capability-manifest`.

## Acceptance criteria
- [ ] Manifest is derived from code registries, never handwritten.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Test asserting every registered component appears in the manifest.
