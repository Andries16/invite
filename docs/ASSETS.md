# Invite.md — Asset System

Status: Proposed.

## 1. Asset lifecycle

```
upload
 -> quarantine
 -> inspect
 -> validate
 -> process
 -> store immutable variants
 -> reference from InvitationSpec
 -> garbage-collect when unreachable
```

## 2. Asset types

Initial support:

- JPEG
- PNG
- WebP
- AVIF
- SVG with strict sanitization
- MP4/WebM
- GIF where appropriate
- audio formats if enabled

Exact formats should be configured centrally.

## 3. Upload security

Never trust:

- filename
- MIME type supplied by client
- extension
- image dimensions
- metadata

Inspect actual file signatures and decode where appropriate.

Apply:

- size limits
- dimension limits
- duration limits
- codec restrictions
- decompression limits
- malware scanning where available

## 4. Object storage

Store immutable originals and derived variants separately.

Conceptual namespace:

```
projects/{projectId}/assets/{assetId}/original
projects/{projectId}/assets/{assetId}/variants/{variant}
builds/{buildId}/...
```

Do not construct storage keys from arbitrary user filenames.

## 5. Image processing

Generate responsive variants.

Typical dimensions can include:

- thumbnail
- card
- content
- hero
- original

The exact sizes should be based on actual UI requirements.

Store width, height, format, byte size, and processing status.

## 6. Video processing

For supported video:

- validate codec/container
- inspect duration
- create web-optimized variants
- create poster image
- store metadata

Avoid requiring full video download before the invitation can render if lazy loading is possible.

## 7. SVG

SVG is executable in some contexts.

Never serve untrusted SVG as raw HTML without sanitization.

Remove:

- scripts
- event handlers
- unsafe external references
- dangerous elements

Prefer rasterization for untrusted assets where necessary.

## 8. Asset references

InvitationSpec should reference stable asset IDs or immutable public asset references.

It should not contain temporary upload URLs.

## 9. Asset ownership

Every asset belongs to a project/tenant.

Authorization must be checked when:

- reading metadata
- deleting
- attaching to invitation
- creating public variants

## 10. Orphan cleanup

An asset may be referenced by:

- draft versions
- published versions
- campaigns
- messages
- historical builds

Do not delete based only on the current draft.

Garbage collection should use reachability across retained entities.

## 11. CDN

Public optimized assets should be cacheable.

Private originals should not be publicly enumerable.

Use signed URLs or authenticated storage access for private operations.

## 12. Content security

Generated pages should use an allowlist for asset origins.

Do not permit arbitrary user-provided script URLs.

## 13. Metadata

Asset metadata should include:

- ID
- project ID
- media type
- original filename for UI only
- size
- dimensions
- duration
- hash
- processing state
- variants
- created timestamp

## 14. Deduplication

Content hashing can avoid duplicate storage within a project.

Deduplication must not accidentally cross authorization boundaries.
