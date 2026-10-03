# Security

Treat user input, uploaded files, AI output and public traffic as hostile.

## Authentication and authorization

Use deny-by-default authorization.

For every tenant-owned operation:
1. authenticate
2. resolve ownership
3. authorize
4. execute

Never trust client-supplied IDs.

## AI security

Prompt injection is expected. User content is not system instructions.

AI tools must be narrowly scoped and validate every parameter.

## Generated sites

Never include:
- API keys
- database credentials
- signing secrets
- private storage credentials
- privileged tokens
- internal-only service URLs

## Build sandbox

Use isolated workers/containers, resource limits, timeouts, restricted filesystem access, non-root execution where practical and restricted network access.

## Uploads

Validate MIME type, extension, size and media-specific limits. Do not trust client-provided MIME values.

Process media asynchronously in isolated workers.

## Web security

Use HTTPS, secure cookie settings where applicable, CSP, CSRF protection where applicable, XSS-safe rendering, output encoding and dependency auditing.

## Logging

Never log passwords, tokens, keys or private signed URLs. Avoid full private conversation content by default. Use correlation IDs.

## Deletion

Deletion must cover database records and associated private object-storage data according to retention policy.
