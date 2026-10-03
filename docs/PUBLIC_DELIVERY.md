# Invite.md — Public Delivery, URLs, CDN and QR

Status: Proposed.

## 1. Stable URL principle

Every invitation receives a stable logical URL.

Example:

```
https://invite.md/i/beautiful-slug
```

The URL points to a publication record, not directly to a mutable build path.

The public URL must not change when the user publishes a new version.

## 2. Publication indirection

Conceptually:

```
logical invitation URL
 -> publication record
 -> immutable artifact ID
 -> CDN/object storage
```

Changing the published version changes the pointer.

It does not rewrite historical artifacts.

## 3. Why not expose object-storage URLs

Object storage URLs are implementation details.

They can:

- change provider
- contain internal identifiers
- bypass CDN behavior
- complicate caching
- make migrations harder

Users should only receive stable logical URLs.

## 4. Slugs

A slug should be:

- URL-safe
- readable
- unique
- non-sensitive
- immutable by default after publication

Do not automatically derive a slug from private information.

Allow regeneration/change before publication where practical.

## 5. Routing

The edge layer resolves the logical URL.

Possible implementation:

```
GET /i/:slug
 -> lookup/cache publication
 -> fetch artifact
 -> return cached response
```

At scale, edge caching should avoid a database lookup for every request.

## 6. Caching

Immutable build assets should use content-addressed or versioned paths.

Example:

```
/assets/logo.a8f3c1.webp
```

The logical HTML/publication response can have controlled cache invalidation.

When publication changes, the stable URL cache must be purged or revalidated.

## 7. QR codes

QR generation uses the stable logical URL.

Never encode:

- object storage URL
- temporary preview URL
- build worker URL
- internal API URL

The QR image can be generated:

- on demand
- asynchronously
- during publication

Store the generated QR as an asset if repeated access is expected.

## 8. QR quality requirements

Generate at multiple practical sizes.

Validate:

- quiet zone
- sufficient contrast
- error correction
- URL length
- readability at intended print size

The QR should remain useful when printed.

## 9. Public page isolation

A public invitation request must not provide access to:

- creator API
- project data
- other invitations
- unpublished versions
- private recipient records

Use publication identifiers and explicit public data projection.

## 10. Custom domains

Custom domains are an optional extension.

Conceptually:

```
custom domain
 -> domain mapping
 -> invitation publication
 -> artifact
```

Domain ownership verification must be separate from invitation publication.

## 11. Preview URLs

Preview URLs must be:

- authenticated, or
- unguessable and time-limited

They must not be treated as public stable URLs.

## 12. Unpublish

Unpublishing changes the publication pointer/state.

Historical artifacts may remain stored for recovery until retention policy deletes them.

The stable URL should return a controlled not-found/unpublished response rather than accidentally serving an old version.
