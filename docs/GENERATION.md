# Generation Pipeline

## Pipeline
~~~text
InvitationSpec
 -> schema validation
 -> normalization
 -> component/design planning
 -> React render tree
 -> static build
 -> artifact validation
 -> immutable artifact storage
 -> publication
~~~

## Validation
Reject unknown schema versions, invalid props, invalid asset references, unsupported interactions and unsafe URLs.

## Normalization
Canonicalize colors, locales, dates/time zones, defaults and asset references.

## Rendering
Only trusted application components execute. Renderer has no access to database credentials, AI keys or private service credentials.

## Build isolation
Treat builds as untrusted code execution. Apply CPU, memory, timeout, filesystem and output-size limits. Deny network access by default.

## Artifact validation
Verify entry points, assets, output limits and absence of secret-like values or forbidden content.

## Publication
Publication happens only after artifact validation succeeds.

~~~text
logical invitation -> immutable artifact/version
~~~

## Rollback
Rollback is a publication pointer change. Never mutate an existing artifact.

## Versioning
Record InvitationSpec schema version, renderer version, component version, theme/token version and build version. Existing artifacts remain immutable when renderer code changes.
