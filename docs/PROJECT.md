# Invite.md — Complete Project Definition

Status: Proposed implementation blueprint.

## 1. What Invite.md is

Invite.md is a web platform for creating personalized, interactive invitation and announcement websites through an AI-guided creative process.

The user does not start by configuring a conventional website builder. They describe an intention such as:

- "I want to invite my girlfriend to a surprise date."
- "Create a wedding invitation for 120 guests."
- "Make a funny birthday invitation for my best friend."
- "Create a romantic proposal page with a QR code."
- "I need 300 personalized invitations based on one design."

The platform turns that intention into a structured creative specification, renders it through trusted components, builds a static web artifact, and publishes it at a stable URL.

The product therefore combines four systems:

1. A conversational creation environment.
2. An AI creative/design orchestration layer.
3. A deterministic invitation renderer and build system.
4. A public delivery and interaction platform.

The generated invitation is an artifact owned by the user/project. It is not arbitrary application code executed inside the core platform.

## 2. Product promise

The user should be able to move from idea to a polished invitation without knowing React, CSS, hosting, animation libraries, responsive design, accessibility, or deployment.

The system should make sophisticated design possible while keeping the authoring experience simple.

The primary experience is:

```
Idea
  -> conversation
  -> structured intent
  -> creative direction
  -> InvitationSpec
  -> live preview
  -> revisions
  -> generation
  -> validation
  -> publication
  -> stable public URL
  -> QR/share
```

## 3. Core user journeys

### 3.1 Single invitation

1. User creates a project.
2. User describes the occasion.
3. AI asks only questions that materially improve the result.
4. User supplies text, dates, people, images, videos, colors, preferences, and constraints.
5. AI proposes a creative direction.
6. System produces an initial InvitationSpec.
7. Live preview renders the spec.
8. User asks for changes in natural language.
9. AI converts changes into structured patches.
10. User previews desktop/mobile behavior.
11. User publishes.
12. Platform assigns or confirms a stable public URL.
13. QR code is generated from the stable URL.
14. Public visitors can view the invitation without accessing the creator application.

### 3.2 Campaign

A campaign represents many invitations sharing one design.

Example:

```
Wedding template
  + 250 recipient records
  + shared media
  + recipient-specific variables
  = 250 public invitation URLs
```

The implementation should prefer one shared immutable template artifact plus recipient data rather than rebuilding identical assets 250 times.

Recipient-specific values may include:

- name
- greeting
- table number
- access token
- personalized message
- RSVP identity
- language
- invitation code

Variable substitution must be constrained and escaped. Recipient data must never become executable HTML, JavaScript, CSS, or template source.

### 3.3 Public interaction

A generated site may optionally expose:

- RSVP
- quiz answers
- guest messages
- reaction
- attendance confirmation
- song selection
- private guest information
- analytics events

These interactions use platform APIs. The generated page does not receive database credentials or privileged service tokens.

## 4. Main product surfaces

### Creator application

Used by authenticated users.

Primary areas:

- Dashboard
- Create
- Conversation
- Preview
- Invitations
- Campaigns
- Media
- Analytics
- Settings

### Public invitation

A fast, mobile-first website with no creator navigation.

The public experience should feel like a finished creative artifact, not a SaaS product.

### Platform API

Owns:

- identity
- projects
- invitations
- conversations
- assets
- campaigns
- publication state
- generation jobs
- public interaction endpoints
- analytics ingestion

### Workers

Own asynchronous work:

- AI calls
- media processing
- image optimization
- video processing
- static generation
- artifact validation
- QR generation
- cleanup
- analytics aggregation

## 5. Product boundaries

The creator application and generated invitations have different security and performance requirements.

The creator application may access authenticated APIs.

A public invitation may access only explicitly public resources.

A generated invitation must never receive:

- database credentials
- internal API tokens
- cloud provider credentials
- AI provider keys
- creator session tokens
- arbitrary backend environment variables

## 6. What AI controls

AI may determine:

- content structure
- copy suggestions
- visual direction
- theme selection
- component selection
- layout choices
- animation level
- interaction patterns
- responsive intent
- revisions

AI must express these decisions through typed, validated data.

AI must not normally generate arbitrary production application source code and execute it as part of publication.

## 7. What the deterministic system controls

The platform owns:

- component implementation
- rendering semantics
- design tokens
- responsive behavior
- accessibility behavior
- security
- asset loading
- build process
- publication
- caching
- URL routing
- interaction API contracts

This separation is central to the product.

## 8. MVP boundary

The first production-capable MVP should support:

- authenticated creator
- project creation
- conversational creation
- typed InvitationSpec
- a useful invitation component library
- a small set of themes
- live preview
- asset upload
- version history
- static generation
- stable public URL
- QR code
- basic RSVP
- campaign creation with variables
- public page analytics
- mobile responsive rendering

The MVP does not need:

- arbitrary custom code execution
- unrestricted third-party plugins
- marketplace
- complex billing
- custom domains for every edge case
- advanced collaboration
- arbitrary embedded scripts

## 9. Success criteria

A successful first implementation should satisfy:

- A nontechnical user can create a useful invitation from a short description.
- AI asks fewer, better questions instead of presenting a giant form.
- Preview and production use the same component semantics.
- A generated page is deterministic from its validated specification and asset references.
- Publishing never exposes platform secrets.
- A public URL remains stable across new versions.
- Campaigns do not duplicate immutable shared assets unnecessarily.
- Mobile behavior is treated as a first-class output.
- Invalid AI output cannot reach publication.
- Every important domain operation is testable without the browser.
