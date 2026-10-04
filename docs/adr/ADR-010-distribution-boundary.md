# ADR-010 — Distribution as a Separate Boundary

Status: Proposed

Stable invitation URLs, custom domains, QR codes and physical exports are distribution concerns, not rendering concerns.

## Decision

Logical invitation identity remains stable while artifacts are immutable. Domain and QR targets resolve to logical identities rather than storage URLs.

## Consequence

The same experience can be distributed digitally and physically without coupling the runtime to a particular CDN or storage provider.
