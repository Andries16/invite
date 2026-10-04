# ADR-006: AI Does Not Execute Arbitrary Production Code

Status: Proposed

## Context

Direct model-generated code execution creates a privileged execution path.

## Decision

AI produces structured data and constrained component specifications. Trusted application code performs production rendering.

If arbitrary generated code is ever introduced, it must execute in a dedicated sandbox with no control-plane credentials.

## Consequences

The component system becomes a deliberate capability boundary. Creative flexibility must come from composition, configuration or controlled extensions.
