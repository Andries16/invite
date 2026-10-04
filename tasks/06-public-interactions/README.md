# Phase 6: Public Interactions

## Prototype Mapping

Maps to prototype capability: **RSVP, Quiz, Guestbook, Branching**

## Architectural Boundaries

### 1. Schema (`packages/interaction-schema`)

- Defines schemas for incoming submissions and outgoing questions.

### 2. API Domain (`apps/api/src/domains/interactions`)

- Safe endpoints for guest submissions. Rate limiting, spam protection, privacy rules.

### 3. Creator UI (`apps/creator`)

- Configuration panels for interaction limits, RSVP structures.

### 4. Worker & Runtime (`apps/public`)

- Renders the interactive elements based safely on schemas, never arbitrary JS.
