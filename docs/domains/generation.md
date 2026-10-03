# Generation

Generation converts a specific InvitationVersion into an immutable artifact.

~~~text
queued -> running -> succeeded
                 -> failed
~~~

Retries must not publish partial output.

Use idempotency to prevent duplicate active publications.

Only validated artifacts can become current publication targets.
