# Invite.md — Implementation Blueprint

Status: Proposed.

## 1. Recommended repository shape

The implementation should evolve toward a monorepo with explicit domain boundaries.

```text
apps/
  creator/              # authenticated React application
  public/               # optional public-site shell or preview runtime
  api/                  # HTTP API
  worker/               # asynchronous job processor
  renderer/             # invitation rendering/build service
  landing/              # marketing site if needed

packages/
  contracts/            # API and domain contracts
  domain/               # domain entities and invariants
  invitation-spec/      # InvitationSpec schema and validators
  design-system/        # creator and invitation UI primitives
  invitation-runtime/   # deterministic invitation renderer
  themes/               # theme definitions
  ai/                   # provider-neutral AI orchestration
  storage/              # object storage abstraction
  queue/                # job abstraction
  config/               # environment/config validation
  analytics/            # event contracts
  testing/              # fixtures and test utilities

docs/
```

Exact framework choices may change. Boundaries should not.

## 2. Dependency direction

Preferred direction:

```
UI
 -> application services
 -> domain
 -> contracts/ports
 -> infrastructure adapters
```

Infrastructure must not define business rules.

The renderer should depend on InvitationSpec and design-system contracts, not on database implementations.

The AI layer should depend on typed domain schemas, not on UI component internals.

## 3. Domain/application/infrastructure split

### Domain

Contains:

- entities
- value objects
- state transitions
- validation rules
- pure transformations

Examples:

- InvitationVersion
- Publication
- Campaign
- Recipient
- GenerationJob

### Application

Contains use cases:

- CreateInvitation
- StartConversation
- ApplyInvitationPatch
- CreateGenerationJob
- PublishInvitation
- CreateCampaign
- SubmitRSVP

Application code coordinates dependencies but should not contain SQL/object-storage implementation details.

### Infrastructure

Contains:

- database repositories
- object storage
- queues
- LLM providers
- image/video processing
- CDN integration
- email provider
- QR generator

## 4. Runtime processes

At minimum:

```text
creator-web
api
worker
renderer
database
cache/queue
object-storage
edge/CDN
```

The renderer may initially run inside the worker process if isolation requirements are satisfied. It should remain a separable boundary.

## 5. Request lifecycle

Authenticated mutation:

```
HTTP
 -> auth
 -> request validation
 -> authorization
 -> application command
 -> domain mutation
 -> repository
 -> event/job
 -> response
```

Public read:

```
public URL
 -> edge
 -> publication lookup/cache
 -> immutable artifact
 -> browser
```

Long-running work:

```
API
 -> create job
 -> queue
 -> worker
 -> progress/state
 -> artifact
 -> publication
```

## 6. Idempotency

Operations that create external side effects should support idempotency.

Important examples:

- create generation job
- publish version
- process uploaded asset
- create campaign batch
- submit RSVP where duplicate submissions are possible

An idempotency key must map to the same semantic operation, not merely suppress HTTP retries.

## 7. State machines

Use explicit states instead of scattered booleans.

Example generation:

```
queued
 -> preparing
 -> rendering
 -> building
 -> validating
 -> storing
 -> completed

queued -> failed
preparing -> failed
rendering -> failed
building -> failed
validating -> failed
storing -> failed
```

Publication:

```
draft
 -> publishing
 -> published
 -> unpublished
```

Do not encode impossible states such as `published=true` and `publicationStatus=failed`.

## 8. Events

Use domain/application events where decoupling is useful.

Examples:

- InvitationCreated
- InvitationVersionCreated
- ConversationCompleted
- AssetUploaded
- AssetProcessed
- GenerationRequested
- GenerationCompleted
- PublicationChanged
- RSVPSubmitted

Events should contain stable identifiers and minimal required data.

Do not use events as an excuse to make simple synchronous operations eventually consistent.

## 9. Configuration

Every process should validate configuration on startup.

Required categories:

- database
- queue
- object storage
- authentication
- AI provider
- public URL
- internal service URLs
- observability

Secrets must never have fallback development values in production.

## 10. Error model

Errors should be machine-readable.

Example:

```ts
type ErrorCode =
  | "AUTH_REQUIRED"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "VALIDATION_FAILED"
  | "VERSION_CONFLICT"
  | "GENERATION_FAILED"
  | "PUBLICATION_FAILED"
  | "RATE_LIMITED"
  | "ASSET_REJECTED";
```

The UI can map codes to human messages.

Do not expose stack traces, provider errors, database errors, or secrets to clients.

## 11. Concurrency

Optimistic concurrency should protect mutable resources.

For example, InvitationVersion updates can include a revision number:

```text
client revision 12
server revision 13
=> reject with VERSION_CONFLICT
```

The client then reloads/merges rather than silently overwriting changes.

## 12. Observability

Every request/job should have:

- correlation ID
- user/project/invitation IDs where applicable
- operation name
- duration
- outcome

Never log:

- access tokens
- cookies
- passwords
- raw private invitation content unless explicitly allowed
- uploaded media bytes
- AI provider secrets

## 13. Feature flags

Feature flags should guard incomplete capabilities such as:

- new renderer
- new AI model
- new theme engine
- campaign variables
- public quiz
- custom domains

Flags belong in application configuration/feature infrastructure, not scattered conditionals.

## 14. Definition of done

A feature is not complete when the UI exists.

It is complete when:

1. domain behavior exists;
2. contracts are typed;
3. authorization is enforced;
4. persistence is implemented;
5. async work is safe if required;
6. UI states cover loading/error/empty/success;
7. responsive behavior exists;
8. accessibility is tested;
9. observability exists;
10. tests cover important invariants;
11. documentation is updated;
12. migrations/backfills are defined where necessary.
