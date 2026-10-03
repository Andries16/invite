# AI Design Generation Specification

## Purpose

Define how AI makes design decisions without bypassing the design system.

## Inputs

AI receives:
- occasion
- relationship
- recipient
- story
- event information
- language
- tone
- explicit visual preferences
- uploaded assets
- interaction preferences
- previous design decisions
- current InvitationSpec
- available design capabilities

## Decision sequence

1. Identify emotional intent.
2. Identify content hierarchy.
3. Select visual direction.
4. Select theme family.
5. Select typography.
6. Build semantic palette.
7. Select page sections.
8. Select layouts.
9. Assign media treatments.
10. Add meaningful interactions.
11. Define motion intensity.
12. Validate responsive behavior.
13. Validate accessibility.
14. Present preview.
15. Iterate from user feedback.

## Emotional intent

Examples:
- intimate
- celebratory
- humorous
- sophisticated
- nostalgic
- playful
- dramatic
- warm
- mysterious

Do not infer sensitive personal attributes from user data.

## Internal design brief

Use an intermediate structure:

type DesignBrief = {
  emotionalIntent: string[];
  visualKeywords: string[];
  avoid: string[];
  typographyDirection: string;
  colorDirection: string;
  imageryDirection: string;
  motionLevel: MotionLevel;
  interactionLevel: InteractionLevel;
};

This is not production code.

## Design consistency

Once a direction is selected, later edits should preserve it unless the user explicitly changes direction.

For example, "change the button" should not silently replace the entire theme.

## Controlled creativity

The AI selects from capabilities exposed by the design system.

If the user requests an unsupported capability, compose it from existing primitives when possible. Otherwise explicitly identify the missing capability.

Never silently invent renderer features.

## Preference precedence

1. explicit current user request
2. explicit prior design decision
3. invitation requirements
4. selected theme
5. AI recommendation
6. defaults

An explicit user request overrides an AI aesthetic preference.

## Iteration

Design changes should be structured patches.

Example conceptual operation:

{
  "op": "set",
  "path": "/design/motion/level",
  "value": "subtle"
}

Do not regenerate unrelated sections.

## Quality gate

Before presenting a design as ready:
- no missing required content
- no inaccessible interactions
- no invalid assets
- no unsupported components
- no obvious contrast failure
- no mobile overflow
- no excessive motion
- no inconsistent typography
- no contradictory theme tokens
