# Invite.md Design System

Status: Proposed baseline.

This document defines the visual and interaction design of both the Invite.md creator platform and the generated invitation websites.

There are two separate surfaces:
1. Creator Platform — the application used to create invitations.
2. Generated Invitation — the public experience received by guests.

They share principles, tokens and accessibility standards, but the public invitation may have a completely different visual identity.

## 1. Design philosophy

Invite.md should feel creative without requiring the user to understand design or development.

Core qualities:
- simple
- creative
- personal
- premium
- emotionally appropriate
- calm during creation
- playful when appropriate

The UI should translate technical decisions into human decisions.

Do not ask users to choose a grid, CSS value, React component or breakpoint. Ask about feeling, style, content and experience.

## 2. Creator workspace

The primary creator experience is a studio composed of Conversation + Live Preview.

Desktop:

Creator header
  |
Conversation panel | Live invitation preview
  |
Composer          | Preview/device controls

Suggested desktop dimensions:
- header: 56–64px
- conversation: 360–460px
- preview: remaining viewport
- minimum useful preview width: about 420px

The creator must remain usable at 1280px desktop width.

Mobile prioritizes conversation. Preview becomes a dedicated screen or sheet.

The creator should not resemble an enterprise administration dashboard.

## 3. Creator navigation

Primary areas:
- Create
- Invitations
- Campaigns
- Media
- Analytics
- Settings

During creation, navigation should become visually secondary.

## 4. Conversation UX

Conversation is the primary creation mechanism.

AI messages should be short, human and purposeful.

Prefer:
"What kind of feeling should this invitation have?"

Then offer visual choices:
- Romantic
- Elegant
- Playful
- Cinematic
- Minimal
- Something else

Avoid giant forms and long questionnaires.

Use progressive disclosure. Ask for advanced information only when it becomes relevant.

## 5. Interaction blocks

The conversation renderer should support typed interaction blocks:
- message
- single choice
- multiple choice
- text
- number
- date/time
- color
- media upload
- preview
- confirmation
- invitation patch

Creative decisions should generally use cards rather than dropdowns.

Cards can contain:
- image
- title
- short description
- selected state
- optional preview

## 6. Creation phases

The AI should naturally discover:

### Occasion
Invitation type, people, event, date and location.

### Story
Memories, relationship context, inside jokes and desired message.

### Visual direction
Mood, palette, typography, imagery and animation intensity.

### Experience
Sections, gallery, timeline, quiz, RSVP, music and interactive elements.

### Refinement
Focused changes after the user sees a preview.

### Publication
Final preview, public URL, QR and sharing controls.

These phases are an internal creation model. They do not need to appear as a wizard.

## 7. Live preview

The preview must render the current normalized InvitationSpec.

It is not a screenshot.

The preview and production renderer must use the same component system.

Preview modes:
- desktop
- tablet
- mobile

Editor chrome must never appear in the published invitation.

## 8. Creator design tokens

The creator UI must be tokenized.

Token groups:
- color
- typography
- spacing
- radius
- elevation
- borders
- motion
- breakpoints
- z-index
- focus

Feature code should not scatter arbitrary visual values.

## 9. Creator typography

Creator typography prioritizes readability.

Hierarchy:
- display
- heading
- subheading
- body
- label
- caption
- metadata

A modern sans-serif is the default platform direction.

Generated invitations can use expressive typefaces.

## 10. Generated invitation component system

Generated sites are compositions of trusted primitives.

Initial primitives:
- Hero
- Text
- Image
- Video
- Gallery
- Quote
- Timeline
- Event details
- Map/location
- Countdown
- RSVP
- Button
- Divider
- Spacer
- Music player
- Quiz
- Reveal
- Story/memory
- Footer

The AI configures these primitives instead of generating arbitrary production CSS or React code.

## 11. Page structure

A possible invitation:

Hero
-> Opening message
-> Story
-> Important moments
-> Event details
-> Gallery
-> Interactive experience
-> RSVP
-> Closing message

This is not a mandatory template.

A love declaration should not automatically look like a wedding invitation.

The AI selects structure from the user's content and intent.

## 12. Hero

Hero variants:
- full-screen image
- cinematic video
- typography-only
- split image/text
- centered editorial
- animated gradient
- collage
- invitation-card
- interactive reveal

A hero should establish emotional identity immediately and remain usable on mobile.

## 13. Sections

Every section has:
- semantic purpose
- layout
- content
- visual treatment
- responsive behavior
- motion behavior

Conceptual shape:

type Section = {
  id: string;
  type: SectionType;
  layout: LayoutSpec;
  content: ContentSpec;
  style?: StyleSpec;
  motion?: MotionSpec;
};

The actual schema belongs in the invitation-schema package.

## 14. Layout system

Use controlled layout primitives:
- container
- stack
- row
- grid
- split
- centered
- full bleed
- overlay
- gallery
- timeline

Avoid arbitrary pixel positioning as the normal AI output.

The layout system exists to guarantee responsive behavior and reproducibility.

## 15. Semantic color system

Invitation colors are semantic:

- primary
- secondary
- background
- surface
- text
- mutedText
- accent
- border
- success
- error

Themes may additionally define gradients, transparency and decorative colors.

AI should select semantic roles rather than writing raw CSS colors throughout a design.

## 16. Theme families

Initial theme families:
- Romantic
- Elegant
- Minimal
- Editorial
- Cinematic
- Playful
- Luxury
- Botanical
- Vintage
- Modern
- Dark
- Celebration

A theme is a token set plus component defaults. It is not a fixed page template.

## 17. Typography themes

Supported directions:
- modern sans + serif
- editorial serif + sans
- handwritten accent + sans
- luxury serif
- geometric sans
- mono accent

Normally use no more than two primary font families plus an optional decorative accent.

## 18. Imagery

Image treatment is part of art direction.

Supported treatments:
- natural
- rounded
- circular
- framed
- polaroid
- editorial crop
- full bleed
- masked
- collage
- duotone
- gradient overlay

Never destructively modify the user's original asset.

## 19. Motion system

Motion levels:
- none
- subtle
- moderate
- expressive
- cinematic

Motion primitives:
- fade
- reveal
- slide
- scale
- parallax
- stagger
- blur reveal
- type-on
- morph
- floating
- scroll-linked

Motion should establish hierarchy, discovery and transitions. Do not animate every element.

Respect prefers-reduced-motion and remove or substantially reduce non-essential motion.

## 20. Interaction design

Interactions need a purpose.

Examples:
- reveal a message
- answer a quiz
- choose an option
- unlock a memory
- RSVP
- navigate a timeline
- open a gallery
- play music

Do not add interaction merely because it is technically possible.

## 21. Emotional interactions

Supported patterns can include:
- envelope opening
- letter reveal
- playful button behavior
- hidden message
- countdown
- memory cards
- choice-based story
- final reveal

These must remain accessible and must never trap the recipient.

## 22. Responsive design

Generated invitations are mobile-first.

Semantic breakpoints:
- mobile
- tablet
- desktop
- wide

Every component defines:
- layout behavior
- typography behavior
- spacing behavior
- media behavior
- interaction behavior

No horizontal overflow.

Interactive touch targets should generally be at least 44x44 CSS pixels.

## 23. Accessibility

Generated invitations target WCAG 2.2 AA where applicable.

Requirements:
- semantic HTML
- keyboard navigation
- visible focus
- sufficient contrast
- meaningful image alt text
- captions/transcripts where relevant
- reduced motion
- accessible controls
- no hover-only interaction
- readable text sizes

Accessibility must be enforced by the renderer/component system, not left solely to AI judgment.

## 24. Audio

Music is optional.

Do not assume autoplay with sound.

Provide an explicit control and never make audio necessary for basic navigation.

## 25. Video

Video must be optimized for mobile.

Support:
- poster
- lazy loading
- muted autoplay where appropriate
- controls
- reduced-data behavior

Do not require a large video download for initial usability.

## 26. Loading

The invitation should become useful quickly.

Use:
- critical content first
- image placeholders
- progressive media loading
- sensible skeletons
- no unnecessarily blocking spinner

## 27. Design quality checks

Evaluate every generated invitation for:
1. visual hierarchy
2. content hierarchy
3. contrast
4. rhythm
5. whitespace
6. typography consistency
7. image consistency
8. responsive behavior
9. motion consistency
10. interaction clarity
11. accessibility
12. performance

## 28. AI as design director

The AI reasons at four levels:

Content — what should it say?
Structure — what sections should exist?
Art direction — what should it look and feel like?
Interaction — how should the recipient experience it?

Preferred sequence:

intent
-> emotional direction
-> content model
-> page structure
-> theme
-> components
-> layout
-> motion
-> responsive behavior

Do not jump directly from user text to arbitrary CSS.

## 29. Design diversity

Different invitations should not all look like the same template.

Variation comes from:
- component composition
- section ordering
- typography pairing
- palette
- image treatment
- spacing
- layout primitives
- motion
- interaction style
- decorative elements

The design system provides constraints, not one visual output.

## 30. Hard design constraints

Prevent:
- unreadable text
- low contrast
- excessive animation
- desktop-only layouts
- inaccessible interactions
- excessive fonts
- overlapping content
- horizontal overflow
- huge unoptimized media
- arbitrary external scripts
- arbitrary third-party embeds
- secret-bearing configuration

## 31. Pre-publish review

Show:
- full preview
- mobile preview
- desktop preview
- interaction preview
- accessibility warnings
- performance warnings
- missing-content warnings

Warnings should use non-technical language.

Example:
"Your hero video may load slowly on mobile. We can optimize it."

## 32. Platform vs invitation

The creator should feel like a creative studio.

The generated site should feel like the final artwork.

Do not expose React, CSS, breakpoints, bundles, build hashes or object storage concepts unless the user explicitly enters a technical mode.

## 33. Design package

Recommended:

packages/design-system/
- tokens/
- creator-components/
- invitation-primitives/
- themes/
- motion/
- accessibility/

Creator components and invitation primitives should remain separate concepts even when sharing low-level tokens.

## 34. Design representation

Design must be serializable and versioned.

Conceptual model:

type DesignSpec = {
  theme: ThemeSpec;
  typography: TypographySpec;
  palette: PaletteSpec;
  spacing: SpacingSpec;
  layout: LayoutSpec;
  motion: MotionSpec;
  imagery: ImagerySpec;
};

InvitationSpec references design concepts, not raw implementation details.

## 35. Design pipeline

User preferences
-> AI design direction
-> DesignSpec
-> InvitationSpec
-> component composition
-> responsive layout
-> motion configuration
-> preview
-> validation
-> static generation

Preview and production must consume the same normalized design representation.

## 36. Final principle

The user should feel that they created something uniquely theirs.

Underneath, the system should be strict, componentized, validated and deterministic.

The experience should feel unrestricted on top while remaining controlled underneath.
