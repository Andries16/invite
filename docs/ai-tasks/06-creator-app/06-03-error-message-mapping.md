# T06.03 — Error code to message mapping

| Field      | Value                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| Phase      | [06 — Creator application](README.md)                                                                |
| Status     | `todo`                                                                                               |
| Priority   | P0 — MVP critical path                                                                               |
| Depends on | [T06.02](06-02-typed-api-client.md), [T04.06](../04-design-system/04-06-creator-state-components.md) |
| Unblocks   | —                                                                                                    |
| Docs       | [IMPLEMENTATION.md](../../IMPLEMENTATION.md), [DESIGN.md](../../DESIGN.md)                           |

## Goal

Map every `ErrorCode` to a translated, non-technical message.

## Scope

- Exhaustive mapping typed against the `ErrorCode` union.

## Deliverables

- `apps/creator/src/errors/*`.

## Acceptance criteria

- [ ] Adding an error code without a message fails typecheck.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.
