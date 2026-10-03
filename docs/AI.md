# AI Architecture

## Role
AI interprets intent and proposes structured changes. It is not the source of truth for authorization, safety, schema validity or publication.

AI handles conversational discovery, clarification questions, copy, creative direction, theme/layout recommendations, component selection, interaction planning and InvitationSpec patches.

Code handles authentication, authorization, validation, persistence, assets, jobs, builds, artifact validation and publication.

## Conversation model
Keep conversation history separate from invitation state.

Conceptual entities:
- Conversation
- Message
- InteractionRequest
- InteractionResponse
- InvitationDraft

Do not reconstruct the entire invitation by replaying the transcript on every request.

## Structured interaction protocol
AI responses may contain typed blocks:
- message
- single choice
- multi choice
- text
- number
- date/time
- color
- media upload request
- preview
- confirmation
- invitation patch

The creator renders these blocks. The model does not directly manipulate browser APIs.

## Tools
Expose narrow tools such as:
- get invitation draft
- update invitation draft
- list assets
- request upload
- validate spec
- preview
- start generation
- get generation status

Do not expose arbitrary database queries, shell commands or privileged filesystem access.

## Spec editing
Prefer structured operations over full-document regeneration.

Examples:
~~~text
set theme.palette.primary
insert section after hero
replace component content
remove interaction
set event.startAt
add media asset
~~~

Every operation is validated against the current schema.

## Provider abstraction
Keep the application independent from one model vendor.

~~~ts
interface AiProvider {
  generate(input: AiRequest): Promise<AiResponse>;
}
~~~

## Prompt rules
Prompts describe product purpose, current spec, available components, interaction protocol, design constraints and output contract.

Critical business rules must also exist in code and schemas.

## AI safety
Model output is untrusted. Never execute arbitrary model-generated server code, trust model-generated authorization decisions, or allow generated invitations to access platform secrets.

## Evaluation
Maintain fixture conversations for simple invitations, weddings, declarations, interactive dates, campaigns, multilingual cases and malicious output. Assert structured correctness and invariant preservation rather than exact prose.
