# Testing Strategy

## Unit

Test InvitationSpec validation, normalization, components, domain routing, URL generation, authorization and job state transitions.

## Integration

Test API/database, queue/worker, storage, AI adapters using fixtures/mocks and publication pointer updates.

## Generation

For fixed specs:

1. generate
2. build
3. validate
4. inspect manifest
5. assert important output invariants

Avoid brittle full-output snapshots unless they provide real value.

## E2E

At minimum:

- create invitation
- conversational creation
- upload asset
- preview
- generate
- publish
- open public URL
- edit
- regenerate
- rollback
- campaign recipient resolution

## AI evaluation

Assert schema validity, required field collection, allowed operations and invariant preservation, not exact wording.

## Security tests

Include authorization bypass, malformed specs, malicious URLs, oversized uploads, path traversal, prompt injection and secret leakage.

## CI

Before merge: typecheck, lint, unit tests, integration tests where practical, schema validation and build verification.
