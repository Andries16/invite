# Invite.md — AI Implementation

Status: Proposed.

## 1. AI is an orchestrator, not the application runtime

The AI system translates natural language into structured intent.

The safe architecture is:

```
User message
 -> conversation state
 -> AI decision
 -> typed interaction / structured patch
 -> schema validation
 -> domain validation
 -> InvitationSpec
 -> deterministic renderer
```

The model never gets authority to bypass validation.

## 2. Conversation state

A conversation should track:

- conversation ID
- project ID
- invitation ID
- current phase
- messages
- extracted facts
- unanswered questions
- design brief
- current InvitationSpec revision
- pending proposed changes
- user decisions
- model/provider metadata
- timestamps

Raw messages are history. Structured state is the source used for generation.

## 3. Interaction protocol

The model should be able to request a typed UI interaction.

Example:

```ts
type AIInteraction =
  | { type: "single_choice"; id: string; question: string; options: Choice[] }
  | { type: "multi_choice"; id: string; question: string; options: Choice[] }
  | { type: "text"; id: string; question: string; placeholder?: string }
  | { type: "date"; id: string; question: string }
  | { type: "color"; id: string; question: string }
  | { type: "media"; id: string; question: string; accept: string[] }
  | { type: "confirmation"; id: string; summary: string };
```

The UI renders these interactions from a trusted registry.

The model supplies data, not executable UI code.

## 4. Question strategy

The AI should optimize for information gain.

Bad:

```
Please provide:
- exact color
- font
- border radius
- spacing
- hero height
- animation duration
- image crop
...
```

Good:

```
What feeling should the invitation have?

A. Romantic and intimate
B. Elegant and formal
C. Playful and surprising
D. Something else
```

The system can derive technical design values from this answer.

## 5. Explicit versus inferred information

Every important decision should be classifiable as:

- explicit user decision
- derived from supplied content
- AI recommendation
- system default

Explicit decisions have the highest precedence.

The AI must not silently override explicit decisions.

## 6. Design brief

The AI should first construct a compact DesignBrief.

Conceptual shape:

```ts
type DesignBrief = {
  emotionalIntent: string[];
  visualKeywords: string[];
  avoid: string[];
  typographyDirection: string;
  colorDirection: string;
  imageryDirection: string;
  motionLevel: "none" | "subtle" | "moderate" | "expressive" | "cinematic";
  interactionLevel: "minimal" | "moderate" | "rich";
};
```

The final design system converts this into supported DesignSpec values.

## 7. Structured edits

User edits should become patches.

Example:

```json
{
  "op": "replace",
  "path": "/design/motion/level",
  "value": "subtle"
}
```

Or:

```json
{
  "op": "replace",
  "path": "/sections/2/layout/variant",
  "value": "split"
}
```

Every patch must be:

1. syntactically valid;
2. schema-valid;
3. domain-valid;
4. capability-valid;
5. applied against the expected revision.

## 8. AI provider abstraction

The application should expose a provider-neutral interface:

```ts
interface AIProvider {
  generateStructured<T>(request: StructuredAIRequest<T>): Promise<T>;
}
```

Provider adapters may use different model vendors.

The domain must not depend on vendor SDK types.

## 9. Prompt architecture

Separate:

- system policy
- product instructions
- design-system capabilities
- conversation state
- user content
- tool results
- output schema

Never concatenate untrusted user content into system instructions.

## 10. Prompt injection

User content and uploaded content can contain malicious instructions.

Treat:

- invitation text
- filenames
- image metadata
- pasted HTML
- web content
- imported documents

as data.

They are not instructions.

The AI must not follow commands embedded inside content unless the product explicitly interprets that content as user intent.

## 11. Tool boundaries

AI tools should be narrow.

Allowed examples:

- read current InvitationSpec
- propose patch
- request asset metadata
- request available themes
- request available components
- request publication status

Avoid a generic tool such as:

```
execute_any_backend_command(...)
```

## 12. Evaluation

Maintain fixtures containing:

- user request
- expected extracted facts
- expected interaction type
- acceptable DesignBrief properties
- expected InvitationSpec constraints
- forbidden behavior

Evaluate:

- schema validity
- instruction following
- consistency
- accessibility constraints
- design capability usage
- regression against previous model/provider versions

AI quality is tested like a software subsystem, not judged only manually.

## 13. AI failure behavior

If AI output is invalid:

1. do not publish it;
2. validate;
3. attempt bounded repair if safe;
4. retry with structured error feedback;
5. otherwise show a recoverable state.

Do not retry indefinitely.

## 14. Cost controls

AI requests should have:

- model selection policy
- token/input limits
- output limits
- timeout
- retry limit
- per-user/project rate limit
- budget accounting

A long conversation should use summarized structured state rather than sending unlimited raw history on every request.

## 15. AI memory

Long-term user memory is not required for the invitation artifact.

The authoritative context for a project should be stored in the project/conversation itself.

Do not make critical invitation behavior dependent on hidden model memory.
