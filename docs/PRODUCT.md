# Product Specification

## Vision
Make custom invitation websites accessible without requiring the user to understand web design or development.

The AI acts as creative director, UX designer, copywriter and implementation planner. Deterministic application code remains responsible for validation and execution.

## Creation flow
1. Start invitation.
2. Select or describe occasion.
3. AI asks only useful questions.
4. Inputs can be text, buttons, cards, multi-select, dates, colors, uploads, etc.
5. User supplies people, story, event, media, tone and preferences.
6. AI summarizes the result.
7. System creates a validated InvitationSpec.
8. User previews it.
9. User iterates conversationally.
10. Generation worker creates an immutable artifact.
11. Publication points a stable URL at the artifact.
12. User shares the URL or QR code.

## Experiences
Wedding, birthday, party, date, proposal, love declaration, anniversary, announcement and custom invitations.

An invitation can be romantic, elegant, playful, cinematic, minimal or another requested style.

## Conversational UX
Do not replace the conversational experience with a giant form. The AI progressively discovers what is needed and stops when enough information exists.

## Live editing
Requests such as "make it more romantic", "use darker colors", "put our story first", "add a playful button", "use this photo as hero" and "remove the quiz" become structured InvitationSpec changes.

They must not directly edit generated production files.

## Single invitation
Example stable URL: https://maria.invite.md

A rebuild must not require a new URL or QR code.

## Campaigns
One template can be reused for many recipients. Recipient-specific values should normally be data, not separate generated applications.

The exact campaign URL convention is an ADR-level decision.

## QR
QR codes point only to stable logical invitation URLs. Never point directly to build IDs, temporary object-storage URLs or deployment URLs.

## Optional public features
RSVP, quizzes, guest messages and analytics may use separate public APIs. Ordinary page delivery remains static.

## Product invariants
1. Public URLs survive rebuilds.
2. Published artifacts are immutable.
3. AI output is validated.
4. User media is stored outside the primary database.
5. Campaigns can reuse templates.
6. Rendering is deterministic for a fixed spec and renderer version.
7. AI is outside the deterministic rendering stage.
