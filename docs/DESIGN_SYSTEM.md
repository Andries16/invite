# Invite.md — Design System Specification

Status: Proposed.

## 1. Two design systems

Invite.md has two related but distinct visual systems.

### Creator system

Optimized for:

- clarity
- editing
- hierarchy
- dense information
- keyboard interaction
- predictable controls

### Invitation system

Optimized for:

- emotion
- storytelling
- visual impact
- immersive media
- touch
- expressive typography
- controlled motion

They may share primitives/tokens but should not look identical.

## 2. Creator layout

Desktop:

```
┌────────────┬──────────────────────────────┐
│ navigation │ conversation / workspace     │
│            │                              │
│            │                              │
│            ├──────────────────────────────┤
│            │ live preview / properties    │
└────────────┴──────────────────────────────┘
```

Creation mode should prioritize conversation and preview.

## 3. Creator hierarchy

The user should always know:

1. what the AI is asking;
2. what information is already known;
3. what the current invitation looks like;
4. what needs attention;
5. how to publish.

## 4. Creator components

Required foundational components:

- Button
- IconButton
- Input
- Textarea
- Select
- Autocomplete
- ChoiceCard
- Chip
- Dialog
- Drawer
- Tabs
- Progress
- Toast
- EmptyState
- ErrorState
- MediaPicker
- PreviewFrame
- VersionList
- PublishControl

All interactive components need keyboard and focus behavior.

## 5. Invitation primitives

Required primitives:

- Container
- Section
- Stack
- Grid
- Split
- Overlay
- FullBleed
- Divider
- Spacer
- Media
- Text
- Button
- Card

Complex components compose these primitives.

## 6. Component contracts

Every invitation component should declare:

- stable type
- schema
- content requirements
- optional properties
- responsive behavior
- accessibility behavior
- motion behavior
- supported theme tokens

## 7. Theme contract

A theme should define semantic values rather than component-specific hardcoded colors.

Example:

```ts
type Palette = {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  secondary: string;
  accent: string;
  border: string;
};
```

## 8. Typography

Use a small number of font families.

Recommended maximum:

- primary family
- secondary family
- optional decorative accent

The system must validate font availability/licensing before publication.

## 9. Motion

Motion is a system capability.

Components request semantic transitions such as:

- reveal
- fade
- slide
- scale
- stagger
- parallax

The motion engine determines implementation.

Users can select a global motion level.

```
none
subtle
moderate
expressive
cinematic
```

Reduced-motion preferences override expressive motion.

## 10. Responsive behavior

Components define behavior per semantic breakpoint.

Do not allow arbitrary per-device pixel instructions from AI.

Example:

```
desktop: split
tablet: stacked
mobile: stacked
```

## 11. Visual diversity

AI should generate diversity through:

- section ordering
- composition
- theme
- typography
- media treatment
- spacing
- component variants
- decorative treatment
- interaction patterns

Not through arbitrary CSS generation.

## 12. Design validation

Before publication validate:

- contrast
- font availability
- component compatibility
- missing content
- invalid assets
- responsive overflow
- motion constraints
- accessibility metadata

## 13. Design versioning

Themes and components are versioned.

A historical invitation must continue rendering using compatible versions or remain available as a static artifact.

Changing the global design system must not silently change published invitations.

## 14. AI design contract

AI receives a capability manifest such as:

```
themes:
  romantic
  editorial
  cinematic

components:
  hero
  gallery
  timeline
  countdown
  rsvp

motion:
  none
  subtle
  moderate
  expressive
```

AI cannot request capabilities outside the manifest.


## 36. Storybook contract

The creator design system is developed and reviewed in `apps/storybook`.

Storybook must:

- use the same MUI 9.4.0 and Emotion versions as `@invite/design-system`;
- document every reusable creator component;
- demonstrate default, interactive, disabled/error/empty and responsive states where relevant;
- expose keyboard/focus and accessibility behavior;
- remain independent from API, database, AI and production storage;
- never be imported by `apps/public` or invitation-runtime packages.

Storybook is a development/validation surface only. It does not define the generated invitation visual system.
