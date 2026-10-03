# ADR-007: Experience Runtime

Status: Accepted direction.

## Context

Invite.md is evolving from a conventional invitation builder into a platform for interactive guest experiences. Static sections alone cannot represent cinematic scenes, quizzes, reveals, branching stories, GIF beats, video scenes and personalized journeys.

## Decision

Introduce ExperienceSpec as a first-class domain representation. An Experience consists of ordered scenes, design direction, media, interactions, audio and safe variables. The same normalized representation drives creator preview, Play as guest and production generation.

Experience recipes provide reusable mechanics. Visual language is independent from mechanics.

## Consequences

The platform gains a reusable model for many experience types, stronger preview fidelity, reusable campaign artifacts and scene-oriented analytics. The trade-offs are a more complex schema, a scene runtime, additional validation and stricter performance and accessibility requirements.

## Boundary

Experience behavior is limited to trusted platform capabilities and a versioned schema. User-authored behavior is represented as data and validated before publication.
