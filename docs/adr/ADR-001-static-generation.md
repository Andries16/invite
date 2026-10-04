# ADR-001: Static Generated Invitations

Status: Proposed

## Context

Public invitation pages are read-heavy and should not depend on control-plane availability.

## Decision

Generate immutable static artifacts and serve them through CDN/edge infrastructure.

## Consequences

Lower serving cost and stronger isolation, but dynamic features need separate APIs and edits require regeneration.

## Alternative

Server-render every invitation from the main application database. Simpler initially, but couples public traffic to the control plane.
