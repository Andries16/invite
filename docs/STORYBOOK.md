# Storybook as the Invite.md visual contract

The HTML prototype is the product capability reference. The reusable composition primitives in `@invite/design-system` are the implementation layer used to reproduce that visual language consistently.

## Composition primitives

- `PageHeader` — eyebrow, title, description and contextual actions.
- `SectionHeader` — section title, supporting copy and action.
- `ResponsiveGrid` — responsive page/card layout.
- `StatCard` / `MetricGrid` — dashboard and analytics metrics.
- `StatusChip` — shared lifecycle/status vocabulary.
- `MediaPreview` — reusable visual card/media header.
- `ExperienceCard` — invitation/experience library card.
- `RecipeCard` — experience/template recipe card.
- `PreviewFrame` — shared guest-preview frame.
- `inviteTheme` — visual tokens and MUI component defaults.

## Contract

Prototype parity stories must consume these primitives for repeated creator patterns. Page-specific `sx` is allowed only for composition that is genuinely unique to the page or for prototype-specific art direction.

Do not duplicate navigation, page-header, metric-card, status-chip, experience-card, recipe-card, preview-frame, or responsive-grid implementations inside individual Storybook stories.

The public guest runtime remains separate from this creator design system. Creator MUI components must not be imported by the public runtime.

## Storybook structure

```
Design System/
  Platform Composition

HTML Prototype/
  Parity
  Overlays & Playback

Platform/
  Pages
  Components
  Overlays
  Flows
  States & Responsive
```

The `HTML Prototype/Parity` catalog is the closest visual implementation of the existing `html-prototype`. Changes to the prototype's repeated UI patterns should result in corresponding design-system changes and Storybook coverage.

## Validation

```bash
pnpm install
pnpm --filter @invite/storybook typecheck
pnpm storybook
pnpm storybook:build
```

When a reusable primitive changes, review its component stories first, then review the affected prototype-parity pages.
