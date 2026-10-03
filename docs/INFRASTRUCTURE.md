# Infrastructure

Status: Proposed.

## Environments

Minimum:
- local
- staging/preview
- production

Each environment must have isolated credentials, databases and storage namespaces.

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

## Containers

Containerize API, workers and other server-side services. Keep public static serving independent from application compute.

## Object storage

Use separate namespaces/buckets for:
- source uploads
- processed media
- build artifacts
- temporary generation data

Source uploads are private. Published assets are exposed only through controlled public paths.

## Jobs

Typical jobs:
- AI generation
- media processing
- invitation build
- artifact validation
- publication
- cleanup

Jobs need stable IDs, retry policy, idempotency and observability.

## CDN

Public artifacts should be aggressively cacheable. The logical URL must remain stable while publication selects the current artifact.

## Secrets

Never commit credentials. Inject them through environment/secret management.

Generated sites must receive only explicitly public configuration.

## Infrastructure as code

As infrastructure grows, keep declarative configuration under infrastructure/ and document the deployment contract.

## Cost drivers

Track:
- LLM usage
- build CPU/time
- media processing
- storage
- bandwidth

Cost controls should be part of job policy, not an afterthought.
