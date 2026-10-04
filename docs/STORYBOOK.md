# Invite.md Storybook Contract

## Purpose

apps/storybook is the visual integration environment for the creator platform. It is deliberately broader than a component gallery. The goal is to make the complete creator product inspectable before apps/creator is fully implemented.

## Catalog

Components, Pages, Overlays, Flows, Advanced builder surfaces, States & Responsive and Interaction tests.

## Product lifecycle

Idea -> AI interview -> ExperienceSpec -> Storyboard -> Visual recipe -> Media -> Interactions -> Preview -> Review -> Publish -> Distribution -> Analytics.

Workspace capabilities include Campaigns, Collaboration, Billing, Marketplace, Security, Performance and Export.

## Story rules

A story is a contract, not a screenshot. Use real component composition and deterministic domain states. Keep business logic in packages and avoid turning Storybook into a second application.

## Testing

Interaction stories use @storybook/test with accessible queries. Tests should verify behavior rather than implementation details.

Recommended coverage includes primary actions, form submission, keyboard traversal, modal/drawer interaction, validation, publishing confirmation and campaign personalization preview.

## Documentation requirements

Each major product surface should document purpose, user entry point, primary actions, state model, accessibility expectations, responsive behavior and design-system dependencies.

## Prototype relationship

html-prototype remains useful for visual comparison and product discovery. Storybook is the maintainable implementation-facing contract.

## CI

CI should run Storybook build, typecheck, lint and the interaction test suite against a built Storybook.
