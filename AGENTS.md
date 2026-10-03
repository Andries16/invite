# Invite.md — AI Engineering Instructions

Read this file before changing the repository.

## Source of truth

Read, in order:
1. README.md
2. docs/PRODUCT.md
3. docs/ARCHITECTURE.md
4. docs/AI.md
5. the relevant docs/domains/*.md
6. relevant docs/adr/*.md

If code and documentation conflict on a core invariant, do not invent a third behavior. Resolve the conflict explicitly and update the documentation/ADR.

## Core invariant

The user describes an invitation conversationally. AI converts that intent into a validated, versioned InvitationSpec. Trusted application code renders the specification into a static public site.

Do not make unrestricted LLM-generated production code the normal path.

## Rules

- TypeScript-first and strict typing.
- Keep AI orchestration separate from deterministic rendering.
- Keep public invitation serving separate from the control plane.
- Use async jobs for AI, media processing, and builds.
- Public URLs are stable logical URLs, never build/object-storage URLs.
- Campaigns should reuse one build when only recipient data differs.
- Treat user input, uploads, and AI output as untrusted.
- Generated sites must never receive platform secrets.
- Validate every external input.
- Make architectural changes explicit with ADRs.
- Prefer simple, maintainable infrastructure over premature distributed complexity.

## AI rule

AI may propose content, layout, components, themes and interactions. It must not bypass authorization, schemas, build isolation or security boundaries.

Preferred flow:

Conversation -> structured answers -> InvitationSpec -> validation -> renderer -> build -> artifact validation -> publish.

Do not put important business invariants only in prompts.
