# Task System

Implementation tasks are the delivery contract for the Invite.md platform. The HTML prototype defines the intended product experience; `docs/PRODUCT.md`, `docs/DESIGN.md`, `docs/DESIGN_SYSTEM.md` and `docs/ARCHITECTURE.md` define the non-visual product and architecture constraints.

Every task phase must map its capability to the same vertical slice:

1. **Schema** — versioned contracts in `packages/*`.
2. **API** — control-plane boundaries in `apps/api/src/domains/*`.
3. **Creator UI** — React + MUI 9.4.x through `@invite/design-system`.
4. **Worker** — asynchronous AI/media/generation work in `apps/worker`.
5. **Public runtime** — deterministic guest playback in `apps/public` and `packages/invitation-runtime`.
6. **Quality** — Storybook stories, accessibility, responsive behavior and automated tests where applicable.

## Product invariants every task must preserve

- AI produces structured proposals/spec patches; it does not write production files directly.
- Generated experiences use validated, trusted components rather than arbitrary AI-generated production JavaScript/CSS.
- Preview, guest playback and production generation consume the same normalized representation.
- Published artifacts are immutable and public URLs remain stable across rebuilds.
- Campaign personalization is constrained data, not a separate generated application per recipient.
- Dynamic interactions are isolated from static content delivery.
- Creator UI and public invitation UI are separate visual systems.
- Public runtime must not depend on MUI, creator UI, API implementation or database code.
- Accessibility, reduced motion, responsive layout and media performance are renderer/component responsibilities, not AI-only responsibilities.

## Prototype alignment

The prototype at `html-prototype/` is the capability reference for:

- AI creation and conversational onboarding
- storyboard and scene composition
- visual languages and recipes
- media intelligence
- invitations and versioning
- RSVP, quiz, branching, guestbook, voting and submissions
- campaigns and guest personalization
- story intelligence
- analytics
- localization and export
- QR/custom-domain distribution
- collaboration, billing and marketplace
- guest playback

A task is incomplete if it implements only a creator screen while omitting the schema, API, runtime/worker and validation boundary required by the capability.

## Storybook

`apps/storybook` is the shared visual contract for creator/design-system components. It is not a replacement for the HTML prototype and it must never be imported by the public invitation runtime.

Use:

- `pnpm storybook` for local development
- `pnpm storybook:build` for the production Storybook build
- `pnpm --filter @invite/storybook typecheck` for type validation

See the phase-specific requirements in `tasks/03-design-system` and `tasks/13-quality-security-performance`.
