# AI Architecture

## Role

AI is a creative director and structured planning system, not the production runtime.

AI may understand intent, ask questions, extract stories, recommend visual language, choose recipes, generate copy, propose scenes/interactions, suggest media placement, produce structured patches, localize content and explain recommendations.

AI must not normally emit unrestricted production JavaScript, receive platform secrets, directly publish, bypass schema validation, mutate persistent state without an application command, or introduce arbitrary executable variables.

## Pipeline

User -> Conversation -> Structured Answers -> DesignBrief -> Creative Direction -> Experience Proposal -> Schema Validation -> Repair/Clarification -> Versioned ExperienceSpec -> Deterministic Runtime

## Preference precedence

1. explicit current request
2. explicit previous decision
3. invitation requirements
4. selected recipe/theme
5. AI recommendation
6. platform default

## Structured patching

Prefer operations such as replace copy, reorder scene, change theme token, change motion preset, add media reference, change interaction, change typography and alter responsive rule. A patch must validate before persistence.

## Story ingestion

Long-form text, uploaded documents and media may be transformed into a structured memory/story model. Extracted facts should retain provenance and confidence where practical.

## AI media intelligence

AI can suggest strongest photos, chronological ordering, captions, focal points, video moments, scene placement and visual continuity. Suggestions remain proposals until accepted or explicitly applied.

## Evaluation

Evaluate AI outputs for schema validity, narrative coherence, design-system compliance, accessibility, unsafe content, unsupported capabilities, performance risk and factual preservation.

## Provider boundary

The AI package exposes provider-neutral operations. Provider-specific SDKs, prompts, retries, token accounting and safety settings stay behind the AI infrastructure boundary.

## Human control

AI should propose high-impact changes and make low-risk changes only when explicitly authorized by the current creator workflow. Every applied AI mutation produces a versioned change record.
