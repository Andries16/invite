# API Conventions

The transport may be REST or typed RPC. Domain rules are transport-independent.

## Rules

- Validate all external input.
- Authenticate before authorization.
- Authorize every tenant-owned resource.
- Use stable machine-readable error codes.
- Paginate unbounded collections.
- Use idempotency for expensive mutations.
- Keep long-running operations asynchronous.

## Generation

A generation request returns a job ID instead of holding an HTTP request open.

```text
POST /invitations/:id/generations
-> 202 { jobId }

GET /generation-jobs/:jobId
-> queued | running | failed | succeeded
```

## Public interactions

RSVP/quiz/message APIs are separate from ordinary static serving. Anonymous endpoints require validation, rate limits and abuse protection.

## Errors

```json
{
  "code": "INVITATION_SPEC_INVALID",
  "message": "The invitation specification is invalid.",
  "details": []
}
```

Do not leak database, filesystem or provider internals.

## Versioning

Breaking public changes require a migration/versioning plan.
