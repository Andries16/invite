# ADR-005: Campaign Template Reuse

Status: Proposed

## Context

Hundreds of invitations may share one design and differ only in recipient data.

## Decision

Represent campaigns as one template plus recipient data and prefer a shared artifact.

## Consequences

A safe variable runtime is required. Recipient-specific data must remain data-driven and validated.
