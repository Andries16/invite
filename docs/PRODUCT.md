# Product Specification

## Vision

Make custom invitation websites accessible without requiring the user to understand web design or development.

The AI acts as creative director, UX designer, copywriter and implementation planner. Deterministic application code remains responsible for validation and execution.

## Creation flow

1. Start invitation.
2. Select or describe occasion.
3. AI asks only useful questions.
4. Inputs can be text, buttons, cards, multi-select, dates, colors, uploads, etc.
5. User supplies people, story, event details, media, tone and preferences.
6. AI summarizes the result.
7. System creates a validated InvitationSpec.
8. User previews it.
9. User iterates conversationally.
10. Generation worker creates an immutable artifact.
11. Publication points a stable URL at the artifact.
12. User shares the URL or QR code.

## Supported experiences

Wedding, birthday, party, date, proposal, love declaration, anniversary, announcement and arbitrary custom invitations.

An invitation can be romantic, elegant, playful, cinematic, minimal or another user-requested style.

## Conversational UX

Do not replace the conversational experience with a giant form.

The AI should progressively discover what is needed. It should stop asking questions when there is enough information to produce a coherent result.

## Live editing

Examples:
- "Make it more romantic."
- "Use darker colors."
- "Put our story before the event."
- "Add a playful final button."
- "Use this photo as the hero."
- "Remove the quiz."

These become structured changes to InvitationSpec, not direct edits to generated production files.

## Single invitation

Example stable URL:

https://maria.invite.md

A rebuild must not require a new URL or QR code.

## Campaign

One template can be reused for many recipients. Recipient-specific values should normally be data, not separate generated applications.

Example conceptual URLs:

~~~text
https://wedding.andrei.invite.md/ana
https://wedding.andrei.invite.md/ion
~~~

The exact campaign URL convention remains an ADR-level decision.

## QR

QR codes point only to stable logical invitation URLs. Never point QR codes directly to build IDs, temporary object-storage URLs or deployment URLs.

## Optional public features

RSVP, quizzes, guest messages and analytics may exist through separate public APIs. Ordinary page delivery should remain static.

## Product invariants

1. Public URLs survive rebuilds.
2. Published artifacts are immutable.
3. AI output is validated.
4. User media is stored outside the primary database.
5. Campaigns can reuse templates.
6. Rendering is deterministic for a fixed spec and renderer version.
7. AI is outside the deterministic rendering stage.
