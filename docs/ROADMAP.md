# Invite.md Implementation Roadmap

Status: Proposed.

This roadmap establishes foundations for the full Invite.md product while keeping the runtime deterministic.

## Phase 0 — Platform foundation
- [ ] Monorepo build/dev/typecheck/CI baseline
- [ ] Configuration/environment boundary
- [ ] API contract boundary
- [ ] Persistence abstraction and migrations
- [ ] Object storage abstraction
- [ ] Queue abstraction
- [ ] Authentication/authorization boundary
- [ ] Error model and request IDs
- [ ] Observability boundary
- [ ] Test fixtures and contract tests
Exit: all services start locally and package boundaries compile.

## Phase 1 — Experience core
- [ ] Versioned ExperienceSpec
- [ ] DesignSpec
- [ ] SceneSpec
- [ ] Trigger model
- [ ] Interaction model
- [ ] Media references
- [ ] Safe variable model
- [ ] Schema validation
- [ ] Runtime state machine
- [ ] Trusted components
- [ ] Creator preview
- [ ] Guest playback
Exit: one ExperienceSpec renders identically in preview, guest mode and production.

## Phase 2 — AI creative director
- [ ] Conversation sessions
- [ ] Typed question/answer protocol
- [ ] Intent extraction
- [ ] Story extraction
- [ ] DesignBrief
- [ ] Creative direction
- [ ] Recipe selection
- [ ] Structured ExperienceSpec proposal
- [ ] Validation/repair loop
- [ ] Structured patch operations
- [ ] Version history
- [ ] Explainable AI decisions
- [ ] AI provider abstraction
Exit: users can describe and iteratively refine an experience conversationally.

## Phase 3 — Design system and recipes
- [ ] Visual language registry
- [ ] Theme/token schema
- [ ] Typography and layout primitives
- [ ] Motion presets
- [ ] Responsive rules
- [ ] Accessibility rules
- [ ] Experience recipe registry
- [ ] Recipe composition and preview
- [ ] Play-as-guest
Exit: AI creativity is broad but constrained to trusted capabilities.

## Phase 4 — Media platform
- [ ] Upload sessions
- [ ] MIME/size validation
- [ ] Image derivatives
- [ ] Video posters/thumbnails
- [ ] Audio metadata
- [ ] GIF handling
- [ ] Asset lifecycle
- [ ] Async media processing
- [ ] Media library
- [ ] Smart crop/focal point foundation
Exit: media can be safely uploaded, transformed and consumed.

## Phase 5 — Generation and publication
- [ ] Generation jobs
- [ ] Build manifests
- [ ] Immutable artifacts
- [ ] Artifact validation
- [ ] Atomic publication pointer
- [ ] Stable logical URLs
- [ ] CDN/edge adapter
- [ ] QR generation
- [ ] Publish/unpublish
- [ ] Rollback
- [ ] Cache invalidation
Exit: published experiences survive control-plane failures and can be rolled back.

## Phase 6 — Public interaction platform
- [ ] Interaction API
- [ ] RSVP
- [ ] Quiz
- [ ] Branching choices
- [ ] Guestbook
- [ ] Voting
- [ ] Photo upload submissions
- [ ] Rate limits
- [ ] Spam protection
- [ ] Privacy controls
- [ ] Interaction analytics
Exit: guests can interact without exposing the control plane.

## Phase 7 — Campaign and personalization platform
- [ ] Campaign entity
- [ ] Master experience
- [ ] Typed recipient variables
- [ ] CSV import
- [ ] Import validation/reporting
- [ ] Per-recipient URLs
- [ ] Shared artifact reuse
- [ ] Recipient-specific asset handling
- [ ] Bulk publication
- [ ] Campaign analytics
- [ ] Recipient isolation
Exit: hundreds of personalized invitations can be produced safely.

## Phase 8 — Story and AI media intelligence
- [ ] Long-form story ingestion
- [ ] Document ingestion
- [ ] Memory extraction
- [ ] Relationship/event model
- [ ] Photo ranking and duplicate detection
- [ ] Smart cropping
- [ ] Video moment extraction
- [ ] AI captions
- [ ] AI asset suggestions
- [ ] Voice/narration support
Exit: raw stories and media can become structured experience material.

## Phase 9 — Localization and export
- [ ] Locale-aware content
- [ ] Tone-preserving AI translation
- [ ] Locale formatting
- [ ] Static ZIP export
- [ ] Print/PDF export
- [ ] Social image export
- [ ] Short video export
- [ ] Share metadata
Exit: one experience can be distributed across languages and channels.

## Phase 10 — Physical and domain distribution
- [ ] Custom domains
- [ ] Domain verification
- [ ] TLS boundary
- [ ] Printable QR cards
- [ ] Save-the-date outputs
- [ ] Table cards
- [ ] Menus
- [ ] Thank-you cards
- [ ] Physical design system
Exit: digital and physical outputs share the same creative system.

## Phase 11 — Collaboration and commerce
- [ ] Projects/workspaces
- [ ] Roles and permissions
- [ ] Comments
- [ ] Review workflow
- [ ] Activity log
- [ ] Billing boundary
- [ ] Plans
- [ ] Usage/credits
- [ ] Invoices
- [ ] Entitlements
Exit: Invite.md supports professional creators and teams.

## Phase 12 — Experience ecosystem
- [ ] Recipe publishing
- [ ] Private/public recipes
- [ ] Theme marketplace
- [ ] Recipe/component versioning
- [ ] Creator profiles
- [ ] Ratings/reviews
- [ ] Licensing metadata
- [ ] Marketplace moderation
- [ ] Revenue sharing
Exit: third-party creators can extend the creative vocabulary without arbitrary runtime code.

## Critical sequencing
Conversation -> structured answers -> DesignBrief -> ExperienceSpec -> validation -> trusted runtime -> preview -> generation -> artifact validation -> publication.

Do not make unrestricted LLM-generated production code the normal path.
