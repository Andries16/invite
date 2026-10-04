# ADR-004: Stable Public URLs

Status: Proposed

## Context

Printed QR codes and shared links must continue working after edits.

## Decision

QR codes resolve to logical invitation URLs. The logical publication points to the current immutable artifact.

## Consequences

Publishing becomes a pointer update and artifact IDs are not canonical public URLs.
