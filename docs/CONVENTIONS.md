# Engineering Conventions

## TypeScript
Use strict TypeScript, explicit public types, discriminated unions and schema-derived external types.

Avoid any, unsafe casts and hidden global state.

## Domain boundaries
Prefer:

~~~text
domain -> application -> adapters/infrastructure
~~~

Business rules should not live in controllers.

## Naming
Use nouns for entities and verbs for commands.

Examples: Invitation, Campaign, GenerationJob, publishInvitation(), generateInvitation().

## Async jobs
Every job has a stable ID, status, timestamps, attempt count, failure information, correlation ID and idempotency behavior.

## Logging
Use structured logs with service, environment, request/job ID and safe entity IDs. Never log secrets.

## Configuration
Centralize configuration parsing and validation. Fail fast on invalid required configuration.

## Dependencies
Before adding a dependency, check maintenance, bundle/runtime impact, security and whether existing code can solve the problem.

## Documentation
Changes to public contracts, persistent models, invariants or architecture require documentation.

## Commits
Prefer focused commits with clear messages.
