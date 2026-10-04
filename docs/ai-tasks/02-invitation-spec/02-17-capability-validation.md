# T02.17 — Capability validation

| Field      | Value                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| Phase      | [02 — InvitationSpec](README.md)                                                                                   |
| Status     | `todo`                                                                                                             |
| Priority   | P0 — MVP critical path                                                                                             |
| Depends on | [T02.16](02-16-domain-validation.md)                                                                               |
| Unblocks   | —                                                                                                                  |
| Docs       | [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md), [DESIGN_AI.md](../../DESIGN_AI.md), [RENDERING.md](../../RENDERING.md) |

## Goal

Reject specs that use components, variants, themes or motion not present in the capability manifest.

## Scope

- Validate against a `CapabilityManifest` input (produced by T04.19).
- Report the missing capability explicitly.

## Deliverables

- `validate-capabilities.ts`.

## Acceptance criteria

- [ ] Unknown variants and themes are rejected with a specific issue code.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests with a reduced manifest.
