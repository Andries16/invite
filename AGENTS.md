# Invite.md — AI Engineering Instructions

Read this file before changing the repository.

## Source of truth
Read README.md, docs/PRODUCT.md, docs/ARCHITECTURE.md, docs/AI.md, relevant domain docs and relevant ADRs.

If code and documentation conflict on a core invariant, resolve the conflict explicitly; do not invent a third behavior.

## Core invariant
The user describes an invitation conversationally. AI converts that intent into a validated, versioned InvitationSpec. Trusted application code renders it into a static public site.

Do not make unrestricted LLM-generated production code the normal path.

## Rules
- TypeScript-first and strict typing.
- Keep AI orchestration separate from deterministic rendering.
- Keep public invitation serving separate from the control plane.
- Use async jobs for AI, media processing and builds.
- Public URLs are stable logical URLs, never build/object-storage URLs.
- Campaigns should reuse one build when only recipient data differs.
- Treat user input, uploads and AI output as untrusted.
- Generated sites must never receive platform secrets.
- Validate every external input.
- Make architectural changes explicit with ADRs.
- Prefer simple infrastructure over premature distributed complexity.

Preferred flow:

Conversation -> structured answers -> InvitationSpec -> validation -> renderer -> build -> artifact validation -> publish.

Important business invariants must exist in code and schemas, not only prompts.
