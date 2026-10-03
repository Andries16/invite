# Infrastructure

Status: Proposed.

## Environments
Minimum:
- local
- staging/preview
- production

Each environment has isolated credentials, databases and storage namespaces.

## Runtime
~~~text
Internet
  |
CDN / Edge
  |
Reverse Proxy
  +--> Creator
  +--> Public static artifacts
  |
API
  +--> Database
  +--> Redis/Queue
  +--> Object Storage
  +--> AI Provider
  |
Worker
  +--> build sandbox
~~~

## Object storage
Separate namespaces for source uploads, processed media, build artifacts and temporary generation data.

Source uploads are private. Published assets are exposed only through controlled public paths.

## Jobs
Typical jobs: AI generation, media processing, invitation build, artifact validation, publication and cleanup.

Jobs need stable IDs, retry policy, idempotency and observability.

## CDN
Public artifacts should be aggressively cacheable. The logical URL remains stable while publication selects the current artifact.

## Secrets
Never commit credentials. Inject them through environment/secret management. Generated sites receive only explicitly public configuration.

## Infrastructure as code
As infrastructure grows, keep declarative configuration under infrastructure/ and document its deployment contract.

## Cost drivers
Track LLM usage, build CPU/time, media processing, storage and bandwidth.
