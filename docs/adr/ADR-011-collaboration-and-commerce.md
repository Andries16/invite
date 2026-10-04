# ADR-011 — Collaboration and Commerce Boundaries

Status: Proposed

Workspace roles, billing, usage, plans and entitlements are control-plane concerns and must not leak into the public runtime.

## Decision

Authorization and entitlements are checked at application boundaries. Published artifacts remain independently servable.

## Consequence

Billing providers and collaboration models can change without changing generated experiences.
