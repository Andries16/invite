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


## Experience runtime architecture

The experience layer sits between AI composition and deterministic rendering:

~~~text
Conversation
   |
Storyboard
   |
Validated ExperienceSpec
   +-- DesignSpec
   +-- SceneSpec[]
   +-- InteractionSpec[]
   +-- Media references
   +-- Safe variables
   |
Deterministic experience runtime
   +-- Creator preview
   +-- Guest playback
   +-- Static generation
   |
Immutable artifact -> CDN / Edge
~~~

The same normalized ExperienceSpec drives creator preview, guest playback and production generation. Preview is not a screenshot and production must not use a separate interpretation of the design.

## Runtime boundary

Generated experiences may execute trusted runtime code supplied by the platform, but must never receive platform secrets. User input, uploaded media metadata, AI output and campaign variables are untrusted. Arbitrary user-authored JavaScript is not the normal generation path.

## Scene execution

A scene runtime evaluates a validated trigger, resolves safe content and variables, loads media according to performance policy, applies deterministic motion and emits privacy-aware analytics events. Scene transitions must tolerate slow media and interrupted navigation.

## Campaign runtime

Campaign experiences should reuse a master artifact wherever possible. Recipient-specific values are resolved from a constrained variable model and must not alter the trusted runtime or introduce arbitrary markup or script.

## Public interaction API

Dynamic interactions such as RSVP, quizzes, guestbook and analytics are separate from static content delivery. The public page remains available even when an interaction API is degraded; the runtime should provide graceful fallback states.

## Performance

Experience generation must produce mobile-conscious media derivatives, poster images, lazy-loaded non-critical assets and reduced-motion behavior. A complex experience must not become an excuse for shipping all media in the initial request.


## Experience runtime

The experience layer sits between AI composition and deterministic rendering:

~~~text
Conversation -> Storyboard -> Validated ExperienceSpec
             -> Scenes + Design + Interactions + Media + Variables
             -> Creator Preview / Guest Playback / Static Generation
             -> Immutable Artifact -> CDN / Edge
~~~

The same normalized representation drives preview, guest playback and production generation. Scene execution evaluates validated triggers, resolves safe content and variables, loads media according to performance policy, applies deterministic motion and emits privacy-aware analytics.

Campaigns reuse a master artifact where possible. Recipient values are constrained to a safe variable model. Dynamic RSVP, quiz, guestbook and analytics services remain separate from static content delivery.

Experience generation must remain mobile-conscious: use media derivatives, poster images, lazy loading and reduced-motion behavior.


## Repository structure

```text
invite/
├── apps/
│   ├── creator/        # authenticated creator studio
│   ├── api/            # control-plane application API
│   ├── worker/         # asynchronous AI/media/generation jobs
│   └── public/         # public experience runtime
├── packages/
│   ├── contracts/      # API and ExperienceSpec contracts
│   ├── domain/         # domain entities and invariants
│   ├── experience-runtime/ # deterministic scene/runtime primitives
│   ├── ai/             # AI orchestration contracts and adapters
│   ├── database/       # persistence boundary
│   ├── storage/        # object-storage boundary
│   ├── ui/             # shared creator UI primitives
│   └── config/         # shared typed configuration
├── docs/
│   ├── domains/        # bounded-context documentation
│   └── adr/            # architectural decisions
└── html-prototype/     # standalone product/design prototype
```

### Dependency direction

```text
creator -> contracts/domain/runtime/ui
api     -> contracts/domain/database/storage
worker  -> contracts/domain/ai/database/storage
public  -> contracts/runtime
runtime -> contracts
```

The public runtime must not depend on the creator, API application or database implementation. The API must not become the rendering layer. AI packages produce structured proposals; deterministic runtime packages execute validated specifications.
