# Domain and URL Routing

## Stable URL
A public URL identifies the logical invitation, not its build.

Example: https://maria.invite.md

The edge layer resolves the logical publication to the current immutable artifact.

## Campaign URL
Possible designs include:
- <campaign>.<recipient>.invite.md
- <campaign>.invite.md/<recipient>

Choose the final convention with an ADR after evaluating wildcard DNS/certificates, caching, privacy, analytics and usability.

## Resolution
1. parse host/path
2. identify logical publication
3. resolve current artifact
4. serve immutable artifact
5. cache

Ordinary static traffic should not invoke the main application.
