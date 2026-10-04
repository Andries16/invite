# Experiences Domain

## Responsibility

The Experiences domain owns the structure and behavior of a playable invitation experience.

It covers recipes, visual language, scenes, triggers, interactions, media placement, motion, audio, safe personalization, preview and guest playback, and versioned experience specifications.

## Lifecycle

```text
Draft -> Storyboard -> Composed -> Validated -> Generated -> Published -> Archived
```

A published version is immutable. Editing creates a new draft and version.

## Scene model

A scene is the smallest meaningful unit of the guest journey. It has purpose, content, trigger, media, motion, interaction, timing and responsive behavior.

The scene editor supports add, reorder, duplicate, remove and AI remix.

## Recipe model

Recipes describe reusable experience mechanics rather than fixed pages.

Initial recipes:

- Cinematic intro
- Typewriter story
- GIF memory beats
- Scroll reveal
- Choose your path
- Envelope reveal
- Film timeline
- Video scene
- Celebration mode

## Guest playback

Guest playback uses the same normalized specification as production. Creator controls are hidden. This mode is required before publication.

## Personalization

Campaign variables are resolved from an explicit safe variable model. Personalized data must not change the trusted experience runtime.

## Analytics

The domain emits scene and interaction events that can be aggregated into experience funnels.

## Invariants

1. A published experience has an immutable version.
2. Public URLs are stable across versions.
3. Preview and production use the same experience representation.
4. User content is treated as untrusted data.
5. Experience mechanics are constrained to trusted runtime capabilities.
