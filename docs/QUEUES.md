# Invite.md — Jobs, Queues and Asynchronous Work

Status: Proposed.

## 1. Why jobs exist

AI calls, media processing, and static generation are slow, expensive, failure-prone, or resource-intensive.

They should not block ordinary API requests.

## 2. Job categories

Suggested queues:

- ai
- media
- generation
- publication
- analytics
- cleanup

The exact queue technology is replaceable.

## 3. Job envelope

Conceptual:

```ts
type JobEnvelope = {
  id: string;
  type: string;
  version: number;
  projectId?: string;
  payload: unknown;
  attempt: number;
  createdAt: string;
};
```

Payloads must be schema validated by the worker.

## 4. Retry policy

Retries depend on failure type.

Retry:

- temporary provider outage
- transient network failure
- rate limit
- temporary storage error

Do not blindly retry:

- invalid InvitationSpec
- unsupported asset
- authorization failure
- deterministic build failure
- malformed job payload

## 5. Backoff

Use bounded exponential backoff with jitter.

Never create an infinite retry loop.

## 6. Idempotent workers

A worker may receive the same job more than once.

Each handler must be safe to repeat.

Examples:

- writing an artifact to the same immutable build ID
- processing the same asset version
- applying the same publication operation

## 7. Timeouts

Every external operation needs a timeout.

Examples:

- AI request
- image processing
- video processing
- object upload
- build
- CDN operation

Timeouts should produce typed failure states.

## 8. Dead-letter handling

Jobs that repeatedly fail should enter a dead-letter state.

Operators need:

- failure reason
- last attempt
- job payload reference
- logs/correlation ID
- retry action

Never expose raw internal payloads to ordinary users.

## 9. Progress

Long jobs should report coarse progress.

Example generation:

```
preparing 10%
rendering 40%
building 70%
validating 90%
complete 100%
```

Progress is informational, not a promise of exact time.

## 10. Cancellation

Cancellation should be cooperative.

A cancelled job must not publish partial artifacts.

## 11. Worker isolation

Renderer workers need stricter resource limits than ordinary API workers.

AI workers need provider-specific rate limits.

Media workers may need more CPU/memory.

Scale queues independently.

## 12. Outbox

For critical domain events:

```
transaction
  -> domain state
  -> outbox event
```

A dispatcher publishes the event/job after the transaction commits.

This prevents a database mutation succeeding while its required job disappears.

## 13. Queue observability

Track:

- queue depth
- processing rate
- failure rate
- retry count
- job latency
- oldest waiting job
- dead-letter count

Alert on sustained degradation, not one isolated failure.
