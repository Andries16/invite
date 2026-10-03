# Invite.md — Detailed Security Model

Status: Proposed.

## 1. Threat model

Treat the following as untrusted:

- user text
- invitation content
- AI output
- uploaded files
- imported CSV data
- recipient data
- public requests
- external URLs
- media metadata

## 2. Trust zones

```
Browser
  |
  v
Public edge ----> public artifact storage
  |
  +----> public interaction API

Creator browser
  |
  v
Authenticated API
  |
  +----> database
  +----> private object storage
  +----> queues
  +----> AI providers
```

Build workers are isolated from production credentials.

## 3. Authentication

Use established authentication mechanisms.

Session/token validation belongs at the API boundary.

Do not implement cryptographic authentication from scratch.

## 4. Authorization

Authorization must be checked server-side.

Typical rule:

```
user -> membership -> project -> resource
```

Never rely on a project ID supplied by the browser as proof of access.

## 5. Public authorization

Public invitations use publication/recipient tokens designed for public use.

Public identifiers must not grant creator privileges.

## 6. Prompt injection

AI content must be treated as data.

The AI cannot be trusted to make security decisions.

Security-sensitive authorization always occurs outside the model.

## 7. Generated content isolation

Generated sites should be static and sandboxed.

No generated invitation should have arbitrary access to platform APIs.

Public interactions use a narrow API allowlist.

## 8. Content Security Policy

Generated pages should use a strict CSP appropriate to the renderer.

Avoid:

- arbitrary script origins
- arbitrary frame sources
- unsafe inline scripts unless required and controlled

If inline code is required, use nonces/hashes or generated trusted content.

## 9. XSS

All user-authored text is data.

Use framework escaping.

HTML rendering should be disallowed by default.

If rich text is supported, sanitize against a strict allowlist.

## 10. SSRF

Do not let user content or AI output cause the backend to fetch arbitrary URLs.

If remote media import is supported:

1. validate scheme;
2. resolve safely;
3. enforce destination restrictions;
4. limit redirects;
5. limit response size;
6. validate final content;
7. store a controlled copy.

## 11. Upload abuse

Enforce:

- file size
- count
- dimensions
- duration
- processing time
- account/project quotas

Do not rely on frontend limits.

## 12. Rate limiting

Apply limits to:

- login
- AI calls
- asset uploads
- generation
- public writes
- RSVP
- analytics ingestion

Public endpoints need abuse protection because they are internet-facing.

## 13. Secrets

Secrets exist only in services that need them.

Renderer/public artifacts get no platform secrets.

Never expose secrets through:

- client bundles
- HTML
- logs
- error messages
- artifact metadata

## 14. Privacy

Collect only information required for product behavior.

Provide deletion mechanisms.

Private recipient data should not become public merely because it appears in a campaign.

## 15. Auditability

Record security-sensitive operations:

- membership changes
- publication
- unpublication
- campaign import
- asset deletion
- account deletion

Audit logs should not contain secret values.

## 16. Dependency security

Use:

- lockfile
- automated vulnerability scanning
- dependency update process
- minimal production dependencies

Build artifacts should be reproducible enough to investigate supply-chain changes.

## 17. Incident response

The platform should be able to:

- disable public publication
- revoke compromised assets
- rotate credentials
- invalidate sessions
- block abusive projects
- unpublish affected invitations
- inspect generation provenance
