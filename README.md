# Invite.md

Invite.md is an AI-powered platform for creating personalized invitation and declaration websites.

A user describes an occasion through a conversational AI interface. The system gathers useful information, proposes creative directions, creates a structured InvitationSpec, renders it through trusted React components, builds a static artifact, and publishes it behind a stable public URL.

## Architecture

```text
User -> Creator -> API -> Database / AI / Queue / Storage
                         |
                         v
                    Generation Worker
                         |
                Spec -> Renderer -> Build
                         |
                         v
                  Immutable Artifact
                         |
                         v
                     CDN / Edge
                         |
                         v
                  invite.md public URL
```

## AI implementation instructions

- AGENTS.md
- docs/PRODUCT.md
- docs/ARCHITECTURE.md
- docs/AI.md
- docs/DATA.md
- docs/GENERATION.md
- docs/INFRASTRUCTURE.md
- docs/API.md
- docs/SECURITY.md
- docs/TESTING.md
- docs/CONVENTIONS.md
- docs/domains/
- docs/adr/

Documents marked Proposed are design direction, not irreversible decisions.

## Experience platform direction

Invite.md is an AI-powered platform for creating interactive experiences, with invitations as the core use case. A published artifact can behave like a movie, story, game, letter, memory album, interactive quiz or celebration.

The core flow is:

```text
Intent -> Conversation -> Storyboard -> ExperienceSpec -> Scenes
      -> Preview / Play -> Validation -> Generation -> Publish
```

The creator can choose experience mechanics, visual languages, media, personalization, RSVP, guestbook, countdown and analytics. The public invitation is a finished guest experience with no creator SaaS chrome.
