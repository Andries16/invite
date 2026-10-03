# Invite.md — Implementation Roadmap

Status: Proposed.

## Phase 0 — Foundation

Build:

- monorepo structure
- TypeScript configuration
- configuration package
- API contracts
- domain package
- database adapter
- object-storage adapter
- queue adapter
- authentication boundary
- CI

Exit condition: services start locally and contracts compile.

## Phase 1 — Invitation core

Build:

- Project
- Invitation
- InvitationVersion
- InvitationSpec schema
- DesignSpec schema
- versioning
- validation
- basic creator UI
- basic invitation renderer

Exit condition: manually created InvitationSpec renders correctly.

## Phase 2 — Creator experience

Build:

- conversation UI
- typed AI interaction blocks
- AI provider abstraction
- structured extraction
- DesignBrief
- structured patches
- live preview
- version history

Exit condition: user can create and revise an invitation conversationally.

## Phase 3 — Assets and generation

Build:

- uploads
- processing
- asset variants
- renderer worker
- static build
- artifact validation
- immutable artifact storage

Exit condition: a validated invitation can be generated repeatedly.

## Phase 4 — Publication

Build:

- stable slugs
- publication pointer
- public delivery
- CDN/cache integration
- QR generation
- unpublish
- rollback

Exit condition: published invitation survives application deployments and can be rolled back.

## Phase 5 — Public interactions

Build:

- RSVP
- quiz
- guest messages if needed
- public write protection
- analytics events

Exit condition: public interactions are isolated from creator APIs.

## Phase 6 — Campaigns

Build:

- campaign template
- recipient schema
- CSV import
- variable validation
- batch generation
- per-recipient URLs
- recipient isolation
- campaign analytics

Exit condition: a campaign can safely produce and publish hundreds of invitations.

## Phase 7 — Production hardening

Build:

- rate limits
- abuse controls
- monitoring
- alerts
- backups
- disaster recovery
- security scanning
- load testing
- performance budgets

Exit condition: system can be operated without manual intervention for normal workloads.

## Phase 8 — Expansion

Possible later features:

- custom domains
- collaboration
- richer media
- advanced animation
- template marketplace
- billing
- advanced analytics
- localization
- richer campaign segmentation

These should not complicate the MVP core.

## 9. Critical sequencing rule

Do not start with arbitrary AI-generated code.

The correct sequence is:

```
schema
 -> renderer
 -> design system
 -> preview
 -> AI orchestration
 -> generation
 -> publication
```

The AI becomes much safer and easier to evaluate once the capability surface already exists.
