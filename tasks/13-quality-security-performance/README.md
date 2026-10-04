# Phase 13: Quality, Security, Performance & Analytics

## Prototype Mapping
Maps to prototype capability: **Analytics**, plus cross-cutting quality requirements for every prototype capability.

### Schema
- Analytics event contracts and funnel definitions.
- Security/audit event contracts where required.
- Performance and publication validation results.

### API Domain
- `analytics`: privacy-aware event ingestion and aggregation.
- Security controls: authorization, rate limiting, abuse prevention, input validation and auditability.
- Analytics must not become a dependency for ordinary public page delivery.

### Creator UI
- Funnel and experience-performance views.
- Pre-publish accessibility/performance/security warnings.
- Storybook-backed component states.

### Worker & Runtime
- Event pipeline and aggregation.
- Performance budgets for generated experiences.
- Sanitization and media validation.
- Graceful degradation when analytics or interaction APIs are unavailable.

## Mandatory quality gates

- Storybook build passes in CI.
- Reusable creator components have stories covering meaningful states.
- Accessibility checks are enabled for creator stories.
- Public components are tested independently of MUI.
- Generated experiences are checked for contrast, keyboard access, reduced motion, responsive overflow, media loading and unsafe external content.
- Public delivery remains available when non-essential control-plane services degrade.
