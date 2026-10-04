# Experience Schema

Status: Proposed baseline.

## ExperienceSpec

```text
ExperienceSpec
  schemaVersion
  invitationId
  story
  scenes[]
  design
  interactions[]
  media[]
  audio
  variables[]
  analytics
```

## SceneSpec

```text
SceneSpec
  id
  order
  purpose
  trigger
  content
  media
  motion
  interactionIds
  duration
```

## Trigger types

- load
- scroll
- click
- timed transition
- interaction-complete

## Interaction types

- reveal
- quiz
- branching choice
- countdown
- RSVP
- guestbook
- map
- gallery
- swipe
- hidden message

## Media types

- image
- GIF
- video
- audio
- voice
- sticker
- map
- screenshot

## Variables

Variables are explicit and typed. Initial campaign variables:

- guest.name
- guest.photo
- guest.message
- guest.code
- guest.table
- guest.rsvpUrl

Variables must remain data, never executable application logic.

## Versioning

ExperienceSpec is versioned independently from renderer versions. Published versions are immutable. Rebuilding an experience creates a new artifact while preserving the stable logical invitation URL.

## Runtime boundary

Only validated, public-safe ExperienceSpec data reaches the public runtime. Platform secrets and creator control-plane state never enter a published experience.
