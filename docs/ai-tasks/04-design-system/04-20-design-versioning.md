# T04.20 — Component and theme versioning

| Field      | Value                                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------- |
| Phase      | [04 — Design system](README.md)                                                                                      |
| Status     | `todo`                                                                                                               |
| Priority   | P1 — MVP / production readiness                                                                                      |
| Depends on | [T04.14](04-14-theme-contract-registry.md)                                                                           |
| Unblocks   | —                                                                                                                    |
| Docs       | [DESIGN_SYSTEM.md](../../DESIGN_SYSTEM.md), [GENERATION.md](../../GENERATION.md), [RENDERING.md](../../RENDERING.md) |

## Goal

Version components and themes so published invitations never change silently.

## Scope

- Version identifiers recorded in build provenance.
- Policy for breaking component changes.

## Deliverables

- Versioning policy doc section and version constants.

## Acceptance criteria

- [ ] Changing a component requires a version bump checked in CI.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
