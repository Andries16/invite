# Invite.md — Detailed Test Plan

Status: Proposed.

## 1. Testing philosophy

Test business invariants at the lowest practical level.

The browser should not be the only place where correctness is tested.

## 2. Unit tests

Cover:

- InvitationSpec validation
- DesignSpec validation
- normalization
- state transitions
- slug generation
- campaign variable resolution
- permission checks
- asset validation
- publication transitions
- idempotency
- error mapping

## 3. Contract tests

Verify:

- API request schemas
- API response schemas
- public interaction schemas
- job payload schemas
- AI structured output schemas

A contract change must update consumers intentionally.

## 4. Renderer tests

Given a fixture spec:

- render successfully
- render known component tree
- reject unknown component
- reject invalid props
- resolve assets
- produce expected metadata
- respect theme
- respect responsive constraints

Snapshot tests can help but should not be the only assertion.

## 5. Golden invitation tests

Maintain a small collection of representative invitations:

- wedding
- birthday
- romantic
- cinematic
- playful
- minimal
- campaign
- interaction-heavy

For each, test:

- spec validation
- rendering
- build
- artifact validation
- basic accessibility
- route behavior

## 6. AI evaluation

Each fixture contains:

- user conversation
- expected facts
- expected question categories
- acceptable design directions
- expected constraints

Score automated properties rather than subjective aesthetics alone.

## 7. Security tests

Include:

- XSS payloads
- malicious SVG
- path traversal
- oversized uploads
- SSRF attempts
- invalid campaign variables
- public/private authorization bypasses
- prompt injection
- artifact secret scanning

## 8. API integration tests

Test complete workflows:

```
create project
 -> create invitation
 -> conversation
 -> spec
 -> generate
 -> publish
 -> public GET
```

Also test failure branches.

## 9. Campaign tests

Test:

- CSV validation
- duplicate rows
- missing fields
- variable resolution
- batch retries
- partial failures
- cancellation
- recipient isolation

## 10. Browser E2E

Cover the smallest number of high-value flows:

1. create invitation;
2. answer AI question;
3. upload media;
4. edit preview;
5. publish;
6. open public URL;
7. submit RSVP;
8. create campaign.

Do not duplicate every unit test in Playwright/Cypress.

## 11. Accessibility

Automate:

- semantic structure
- labels
- keyboard navigation
- focus behavior
- contrast checks where tooling supports it

Manually review:

- motion
- reading order
- touch interaction
- unusual invitation compositions

## 12. Performance

Measure generated pages for:

- initial HTML size
- JS size
- CSS size
- image bytes
- LCP
- CLS
- interaction responsiveness

Performance budgets should be explicit.

## 13. Regression testing

Every renderer/design-system change should run representative invitation fixtures.

A component change can affect hundreds of previously generated pages.

## 14. Test data

Never use real private invitations in automated tests.

Use synthetic names, images, recipient data, and event information.

## 15. CI gates

Minimum gates:

- typecheck
- lint
- unit tests
- integration tests
- contract tests
- build
- artifact validation
- security checks

High-cost visual/evaluation suites may run on merge/nightly depending on infrastructure.
