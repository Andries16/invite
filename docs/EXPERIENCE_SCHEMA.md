# Experience Schema

Status: Proposed foundation.

## Root model

ExperienceSpec contains schemaVersion, id, invitationId, story, creativeDirection, design, scenes, interactions, media, audio, variables, analytics, localization and metadata.

## Story

StorySpec contains title, premise, people, moments, emotionalArc and sourceReferences.

## Creative direction

CreativeDirection contains concept, visualLanguage, mood, typography, palette, motion, sound and pacing.

## Scene

SceneSpec contains id, order, purpose, trigger, content, media, motion, interactionIds, responsive rules, accessibility rules and optional duration.

## Trigger types

- load
- scroll
- click
- timed transition
- interaction-complete
- route/branch transition
- scheduled unlock

## Interaction types

- reveal
- quiz
- branching choice
- countdown
- RSVP
- guestbook
- vote
- gallery
- swipe
- drag
- hidden message
- photo submission
- map

## Media types

- image
- GIF
- video
- audio
- voice
- illustration
- screenshot
- map
- poster
- decorative asset

## Variables

Initial campaign variables include guest.name, guest.photo, guest.message, guest.code, guest.table, guest.rsvpUrl, guest.plusOne and guest.locale.

Variables are explicit, typed data. They never contain executable application logic.

## Localization

Localized fields should support locale, source text, translated text, translation provenance and fallback locale. AI translation must preserve intent and tone.

## Analytics

Typed privacy-aware events include session_started, scene_viewed, interaction_started, interaction_completed, reveal_completed, rsvp_started, rsvp_completed and experience_completed.

## Versioning

ExperienceSpec versions independently from renderer versions. Published versions are immutable. Rebuilding creates a new artifact while preserving the stable logical invitation URL.

Schema evolution requires compatibility rules and an ADR for breaking changes.

## Runtime boundary

Only validated public-safe data reaches public runtime. Platform secrets and creator control-plane state never enter a published experience.
