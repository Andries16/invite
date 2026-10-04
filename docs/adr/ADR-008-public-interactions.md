# ADR-008 — Isolate Public Interactions

Status: Proposed

Public RSVP, quiz, guestbook, voting and submission endpoints are separated from static invitation delivery and creator control APIs.

## Decision

Static delivery must remain available when interaction services are degraded. Anonymous writes require validation, rate limiting, abuse controls and privacy policies.

## Consequence

The public runtime needs a small interaction client boundary, while the API owns validation and persistence.
