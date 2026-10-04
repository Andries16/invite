# @invite/storybook

Shared component-development and visual-regression workspace for Invite.md.

Storybook is intentionally scoped to the creator platform and design system. The generated guest experience has a separate visual system and should be validated through invitation-runtime/component stories without importing creator MUI into the public runtime.

## Commands

- `pnpm --filter @invite/storybook dev`
- `pnpm --filter @invite/storybook build`
- `pnpm --filter @invite/storybook typecheck`

Storybook uses React + Vite and the MUI version required by `@invite/design-system`.
