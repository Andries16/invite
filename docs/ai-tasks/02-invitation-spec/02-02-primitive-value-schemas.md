# T02.02 — Primitive value schemas

| Field      | Value                                                                                                                                                                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Phase      | [02 — InvitationSpec](README.md)                                                                                                                                                                                                                                                        |
| Status     | `todo`                                                                                                                                                                                                                                                                                  |
| Priority   | P0 — MVP critical path                                                                                                                                                                                                                                                                  |
| Depends on | [T02.01](02-01-spec-package-scaffold.md)                                                                                                                                                                                                                                                |
| Unblocks   | [T02.03](02-03-metadata-people-event-schemas.md), [T02.04](02-04-content-model-schema.md), [T02.12](02-12-design-spec-schema.md), [T02.13](02-13-interaction-spec-schema.md), [T02.14](02-14-asset-reference-schema.md), [T09.03](../09-generation-pipeline/09-03-safety-validation.md) |
| Docs       | [DATA.md](../../DATA.md), [GENERATION.md](../../GENERATION.md), [SECURITY_MODEL.md](../../SECURITY_MODEL.md)                                                                                                                                                                            |

## Goal

Reusable safe value schemas.

## Scope

- Stable IDs for sections and components.
- Locale (BCP 47), time zone (IANA), ISO date-time.
- Semantic color reference and validated color value.
- Bounded plain text with max lengths; no HTML.
- Safe URL schema allowing only `https:` and platform-generated URLs; rejects `javascript:`, `data:` and local addresses.

## Deliverables

- `v1/primitives/*` schemas.

## Acceptance criteria

- [ ] Unsafe URLs and HTML payloads are rejected.
- [ ] Text length limits are explicit constants.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests

- Unit tests including XSS and URL attack strings.
