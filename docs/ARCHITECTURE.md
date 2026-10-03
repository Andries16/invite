# System Architecture

Status: Proposed baseline.

## Control plane vs content plane

The control plane owns authentication, projects, conversations, InvitationSpec, media metadata, generation, publishing, campaigns, analytics and billing when introduced.

The content plane serves generated public invitations. Static page requests should not require the creator/API/database to be healthy.

## Logical architecture

~~~text
                         CONTROL PLANE
+-------------------------------------------------------------+
| Creator UI                                                  |
| React + TypeScript                                          |
+----------------------------+--------------------------------+
                             |
                             v
+-------------------------------------------------------------+
| API / Application Layer                                     |
| auth | invitations | conversations | generation | publish  |
+-----------+----------------+------------------+-------------+
            |                |                  |
            v                v                  v
        Database         AI Provider        Job Queue
                                                |
                                                v
                                         Generation Worker
                                                |
                                                v
                                          Build Artifact
                                                |
                         CONTENT PLANE           |
+-------------------------------------------------------------+
| CDN / Edge / Reverse Proxy                                 |
| stable logical URL -> current published artifact            |
+-----------------------------+-------------------------------+
                              |
                              v
                    Static invitation site
~~~

## Proposed technology stack

| Concern | Proposed |
|---|---|
| Creator | React + TypeScript |
| UI | MUI/custom design system |
| API | NestJS |
| Validation | Zod |
| Database | PostgreSQL or MongoDB |
| Queue | Redis + BullMQ |
| AI | provider abstraction over LLM API |
| Renderer | React + TypeScript |
| Build | Vite |
| Storage | S3-compatible object storage |
| Edge/CDN | Cloudflare or equivalent |
| Runtime | Docker |
| CI/CD | GitHub Actions |
| Observability | OpenTelemetry-compatible stack |
| QR | QR encoder library |

The database and edge provider are not final until their ADRs are accepted.

## Suggested repository

~~~text
invite/
├── apps/
│   ├── creator/
│   ├── api/
│   ├── worker/
│   └── public/
├── packages/
│   ├── invitation-schema/
│   ├── invitation-components/
│   ├── invitation-runtime/
│   ├── invitation-generator/
│   ├── ai/
│   ├── storage/
│   └── shared/
├── infrastructure/
└── docs/
~~~

## Dependency boundaries

Creator depends on shared contracts.

API owns orchestration and authorization.

Worker may use domain packages but must not depend on browser-only creator code.

Renderer/runtime must not depend on control-plane secrets or privileged modules.

Generated sites contain public-safe data only.

## Determinism

For identical InvitationSpec, assets, renderer version and component version, output should be equivalent. AI is intentionally outside this stage.

## Failure isolation

A failed AI request or build must never replace an existing published artifact. A broken API must not make already-published static pages unavailable.

## When to create an ADR

Create one for a new persistent service, public protocol, execution boundary, core storage choice, public URL strategy, security boundary, or major deployment topology.
