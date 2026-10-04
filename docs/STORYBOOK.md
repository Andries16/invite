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

## Platform contract primitives

The platform catalog should prefer shared primitives from `@invite/design-system` over page-local MUI compositions. The current platform layer includes:

- `CreatorShell` — workspace navigation, identity, plan usage and creator chrome.
- `EditorShell` — three-region experience editor composition.
- `GuestFrame` — public guest preview boundary backed by `PreviewFrame`.
- `PrototypeTable` — compact creator data-table composition.
- `SceneRail` — storyboard scene navigation.
- `FlowStatus` — lifecycle status rows backed by `StatusChip`.
- `PrototypeSection` — repeated page section composition.
- `EmptyState`, `LoadingState`, `PermissionGate` — standardized platform states.
- `PublishStepper` — publication workflow composition.
- `MediaTileGrid` — reusable media-library grid.
- `ConversationPanel` — AI interview/conversation composition.

These primitives are intentionally creator-oriented. They are not public invitation-runtime components and must not introduce dependencies on API, database, worker, or AI implementation details.

## Testing contract

Storybook has an interaction-test project through `@storybook/addon-vitest` and Playwright. The prototype-contract stories include assertions for creator navigation, scene timelines and lifecycle statuses.

Run locally after installing dependencies:

```bash
pnpm --filter @invite/storybook test
pnpm --filter @invite/storybook test:ci
pnpm --filter @invite/storybook typecheck
pnpm storybook:build
```

The Storybook test project uses `apps/storybook/.storybook/vitest.setup.ts` so the same preview/theme configuration is applied to tests. The visual catalog remains the primary parity contract; interaction tests verify that important platform structure is present and discoverable.

## Parity migration rule

When a repeated pattern appears in more than one prototype page or flow, extract it into `@invite/design-system` before adding another local implementation. Existing page-specific composition may remain local when it represents genuinely unique art direction or a one-off workflow, but navigation, page headers, metrics, statuses, cards, previews, tables, empty states, loading states and common workflow shells should remain centralized.
