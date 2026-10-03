# System Architecture

Status: Proposed baseline.

## Control plane vs content plane
The control plane owns authentication, projects, conversations, InvitationSpec, media metadata, generation, publishing, campaigns, analytics and billing when introduced.

The content plane serves generated public invitations. Static requests should not require the creator, API or database to be healthy.

## Logical architecture
~~~text
Creator UI
    |
    v
API / Application
  |      |       |
  v      v       v
 DB     AI     Queue
                |
                v
          Generation Worker
                |
                v
        Immutable Artifact
                |
                v
             CDN/Edge
                |
                v
         Public invitation
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
| AI | provider abstraction over an LLM API |
| Renderer | React + TypeScript |
| Build | Vite |
| Storage | S3-compatible object storage |
| Edge/CDN | Cloudflare or equivalent |
| Runtime | Docker |
| CI/CD | GitHub Actions |
| Observability | OpenTelemetry-compatible stack |
| QR | QR encoder library |

Database and edge provider are not final until their ADRs are accepted.

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
Creator depends on shared contracts. API owns orchestration and authorization. Worker may use domain packages but not browser-only creator code. Renderer/runtime must not depend on control-plane secrets. Generated sites contain public-safe data only.

## Determinism
For identical InvitationSpec, assets, renderer version and component version, output should be equivalent. AI is outside this deterministic stage.

## Failure isolation
A failed AI request or build must never replace an existing published artifact. A broken API must not make already-published static pages unavailable.

## ADR triggers
Create an ADR for a new persistent service, public protocol, execution boundary, storage choice, public URL strategy, security boundary or major deployment topology.
