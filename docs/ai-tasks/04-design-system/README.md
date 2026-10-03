# Phase 04 — Design system

Shared tokens, creator components, invitation primitives, themes, typography, palette, motion, responsive system, accessibility utilities and the capability manifest consumed by AI.

**Exit condition:** Creator components and invitation primitives exist, themes resolve to tokens and the capability manifest is generated from registries.

| ID | Task | Priority | Depends on |
| --- | --- | --- | --- |
| T04.01 | [Design tokens package](04-01-design-tokens.md) | P0 | [T00.09](../00-foundation/00-09-typescript-strict-config.md) |
| T04.02 | [Creator visual theme](04-02-creator-theme.md) | P0 | [T04.01](04-01-design-tokens.md) |
| T04.03 | [Creator input components](04-03-creator-input-components.md) | P0 | [T04.02](04-02-creator-theme.md), [T00.17](../00-foundation/00-17-translations-package.md) |
| T04.04 | [Creator choice components](04-04-creator-choice-components.md) | P0 | [T04.03](04-03-creator-input-components.md) |
| T04.05 | [Creator overlay components](04-05-creator-overlay-components.md) | P0 | [T04.03](04-03-creator-input-components.md) |
| T04.06 | [Creator state components](04-06-creator-state-components.md) | P0 | [T04.03](04-03-creator-input-components.md) |
| T04.07 | [Creator domain presentational components](04-07-creator-domain-components.md) | P1 | [T04.04](04-04-creator-choice-components.md), [T04.05](04-05-creator-overlay-components.md) |
| T04.08 | [Invitation layout primitives](04-08-invitation-layout-primitives.md) | P0 | [T04.01](04-01-design-tokens.md), [T04.13](04-13-responsive-system.md) |
| T04.09 | [Invitation content primitives](04-09-invitation-content-primitives.md) | P0 | [T04.08](04-08-invitation-layout-primitives.md) |
| T04.10 | [Semantic palette and contrast utilities](04-10-semantic-palette-contrast.md) | P0 | [T04.01](04-01-design-tokens.md) |
| T04.11 | [Typography system and font registry](04-11-typography-font-registry.md) | P0 | [T04.01](04-01-design-tokens.md) |
| T04.12 | [Motion engine](04-12-motion-engine.md) | P0 | [T04.01](04-01-design-tokens.md) |
| T04.13 | [Responsive breakpoint system](04-13-responsive-system.md) | P0 | [T04.01](04-01-design-tokens.md) |
| T04.14 | [Theme contract and registry](04-14-theme-contract-registry.md) | P0 | [T04.10](04-10-semantic-palette-contrast.md), [T04.11](04-11-typography-font-registry.md), [T04.12](04-12-motion-engine.md) |
| T04.15 | [MVP theme families](04-15-mvp-themes.md) | P0 | [T04.14](04-14-theme-contract-registry.md) |
| T04.16 | [Additional theme families](04-16-additional-themes.md) | P2 | [T04.15](04-15-mvp-themes.md) |
| T04.17 | [Image treatments](04-17-image-treatments.md) | P1 | [T04.09](04-09-invitation-content-primitives.md) |
| T04.18 | [Accessibility utilities](04-18-accessibility-utilities.md) | P0 | [T04.01](04-01-design-tokens.md) |
| T04.19 | [Capability manifest generation](04-19-capability-manifest.md) | P0 | [T04.14](04-14-theme-contract-registry.md), [T05.02](../05-renderer/05-02-component-registry.md) |
| T04.20 | [Component and theme versioning](04-20-design-versioning.md) | P1 | [T04.14](04-14-theme-contract-registry.md) |
| T04.21 | [Component playground](04-21-component-playground.md) | P2 | [T04.09](04-09-invitation-content-primitives.md), [T04.03](04-03-creator-input-components.md) |

[Back to task index](../README.md)
