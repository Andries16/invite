# Assets

Assets are user-provided or system-generated media.

Lifecycle:

```text
uploaded -> validated -> processed -> available
                              -> rejected
```

Metadata belongs in the database; binary data belongs in object storage.

Validate MIME type, extension, size and media-specific limits. Process media asynchronously.

InvitationSpec should reference assets through stable application IDs or public-safe artifact references.
