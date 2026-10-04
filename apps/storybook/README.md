# Invite.md Storybook

Storybook is the visual contract and component workshop for the Invite.md creator platform.

## Four layers

### Design-system primitives

Buttons, inputs, cards, chips, navigation, dialogs, drawers, feedback and accessibility states.

### Platform surfaces

Dashboard, experiences, invitations, templates, campaigns, media, analytics, settings, billing, marketplace and collaboration.

### Product flows

AI interview, storyboard editor, visual recipe builder, interaction builder, preview, RSVP, quiz, campaign personalization, review, publishing and QR distribution.

### Quality states

Loading, empty, error, success, locked/entitlement, responsive, keyboard and accessibility states.

## Source of truth

The HTML prototype is a product reference. Storybook is the executable visual contract that should evolve into the implementation contract for apps/creator.

When a pattern appears in several stories, extract it into @invite/design-system instead of copying page-specific styles.

## Boundaries

Storybook may depend on MUI and the creator design system. Public invitation runtime must remain independent from Storybook and MUI. Storybook must not become the application runtime.

## Quality gate

Every reusable creator component should have visual states, keyboard/focus coverage, accessible labels, loading/error/empty variants where relevant, responsive behavior and documentation.

Run pnpm storybook:build, pnpm --filter @invite/storybook typecheck, pnpm --filter @invite/storybook lint and pnpm --filter @invite/storybook test.
