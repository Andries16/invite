# T02.23 — Golden spec fixtures

| Field | Value |
| --- | --- |
| Phase | [02 — InvitationSpec](README.md) |
| Status | `todo` |
| Priority | P0 — MVP critical path |
| Depends on | [T02.16](02-16-domain-validation.md), [T00.16](../00-foundation/00-16-testing-package.md) |
| Unblocks | [T05.19](../05-renderer/05-19-renderer-golden-tests.md) |
| Docs | [TEST_PLAN.md](../../TEST_PLAN.md), [TESTING.md](../../TESTING.md) |

## Goal
Representative synthetic specs used across schema, renderer and build tests.

## Scope
- Wedding, birthday, romantic declaration, cinematic, playful, minimal, campaign template, interaction-heavy.
- Malicious fixtures: XSS text, unsafe URLs, unknown components, oversized content.

## Deliverables
- `packages/testing/fixtures/specs/*`.

## Acceptance criteria
- [ ] All valid fixtures pass full validation.
- [ ] All malicious fixtures fail with expected issue codes.
- [ ] Follows the coding rules in [CONVENTIONS.md](../../CONVENTIONS.md).
- [ ] Meets the definition of done in [IMPLEMENTATION.md](../../IMPLEMENTATION.md) §14 where applicable.

## Tests
- Fixture validation test suite.
