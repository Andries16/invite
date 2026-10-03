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


## Experience-first product model

Invite.md is not limited to landing pages. The primary product artifact is an Experience: a structured, playable guest journey composed from scenes, content, media, motion, audio, triggers and interactions.

An invitation is a use case for an Experience. Other supported formats include date stories, proposals, love declarations, birthdays, anniversaries, announcements, party games and custom interactive experiences.

### Experience capabilities
- Cinematic title sequences and scene transitions
- Typewriter and progressive text experiences
- GIF and memory beats
- Scroll reveals and parallax storytelling
- Quizzes and branching choose-your-path flows
- Envelope and letter reveals
- Film timelines
- Video scenes and overlays
- Celebration moments with confetti and sound
- RSVP, countdown, guestbook and map interactions
- Personalized guest variables for campaigns
- AI remixing of story, scenes, motion, media and interaction

### Creation model
The user describes the desired feeling in natural language. Invite AI acts as creative director, UX designer, copywriter, art director and experience director. It produces a storyboard before or alongside the normalized ExperienceSpec and keeps later changes as structured patches.

### Experience library
Recipes are reusable interaction patterns, not fixed pages. A recipe defines capabilities and defaults; AI adapts it to the user's story, visual language, media and audience.

Initial recipes: Cinematic intro, Typewriter story, GIF memory beats, Scroll reveal, Choose your path, Envelope reveal, Film timeline, Video scene and Celebration mode.

### Visual languages
Experience mechanics are independent from visual language. Initial directions include film trailer, terminal/code, VHS memory, scrapbook, luxury editorial, music video, chat story, game UI, rom-com opening and dark cinematic.

### Guest journey
Published experiences are playable. Creator preview therefore has a Play as guest mode that removes creator controls and follows the same scene sequence guests receive.

### Campaigns
A campaign uses one master experience artifact and injects safe recipient data such as guest name, photo, message, code, table and RSVP URL. Recipient personalization is data-driven rather than separate application generation whenever possible.

### Analytics
Analytics are modeled around the experience funnel: session start, scene reached, interaction started, interaction completed, reveal, RSVP and completion. Creators can identify where guests drop out and which interactions perform.


## Experience-first product model

The primary product artifact is a playable Experience, not only a landing page. Experiences combine scenes, content, media, motion, audio, triggers and interactions.

Supported recipes include cinematic intro, typewriter story, GIF memory beats, scroll reveal, choose-your-path, envelope reveal, film timeline, video scene and celebration mode.

Visual language is independent from mechanics. Initial directions include film trailer, terminal/code, VHS memory, scrapbook, luxury editorial, music video, chat story, game UI, rom-com opening and dark cinematic.

The creator can use AI to compose a storyboard, scenes, media placement, interactions and motion. Preview includes Play as guest so the creator can experience the published journey before publishing.

Campaigns reuse a master experience and personalize safe guest values such as name, photo, message, code, table and RSVP URL. Analytics follow the guest journey: session start, scene reached, interaction, reveal, RSVP and completion.


## Experience-first product model

The primary product artifact is a playable Experience, not only a landing page. Experiences combine scenes, content, media, motion, audio, triggers and interactions.

Supported recipes include cinematic intro, typewriter story, GIF memory beats, scroll reveal, choose-your-path, envelope reveal, film timeline, video scene and celebration mode.

Visual language is independent from mechanics. Initial directions include film trailer, terminal/code, VHS memory, scrapbook, luxury editorial, music video, chat story, game UI, rom-com opening and dark cinematic.

AI can compose a storyboard, scenes, media placement, interactions and motion. Preview includes Play as guest so the creator can experience the published journey before publishing.

Campaigns reuse a master experience and personalize safe guest values such as name, photo, message, code, table and RSVP URL. Analytics follow the guest journey: session start, scene reached, interaction, reveal, RSVP and completion.
