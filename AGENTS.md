# Invite.md — AI Engineering Instructions

Read this file before changing the repository.

## Source of truth

Read README.md, docs/PRODUCT.md, docs/ARCHITECTURE.md, docs/AI.md, relevant domain docs and relevant ADRs.

If code and documentation conflict on a core invariant, resolve the conflict explicitly; do not invent a third behavior.

## Core invariant

The user describes an invitation conversationally. AI converts that intent into a validated, versioned ExperienceSpec. Trusted application code renders the same experience model in creator preview, guest playback and the published experience.

Do not make unrestricted LLM-generated production code the normal path.

## Coding rules

Follow docs/CONVENTIONS.md. Mandatory:

- **React Components**: Must be `const` arrow functions only (e.g., `export const MyComponent = () => {}`). Never use `export function`.
- **Component Isolation**: One component per file strictly. Never group multiple components in a single file (like `components.tsx`). Group related atomic files into a directory with a barrel `index.ts` file for clean re-exports.
- **File Naming**: All file and folder names must be strictly `kebab-case` (e.g., `experience-card.tsx`).
- **File Size limit**: Atomic files only, maximum 500 lines each. If a configuration or component grows larger, modularize it immediately.
- **Code Comments**: Absolutely no comments in code. Code must be self-documenting.
- **TypeScript**: Never use `any` or `as any`. You must use strong, strict TypeScript typing (e.g., exact interfaces or `React.ComponentProps<typeof Box>`).
- **Validation**: Before marking a task complete, always verify your changes compile correctly by running `pnpm run typecheck` and `pnpm run format`. Ensure no unused imports or broken module links are left behind.

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

## Platform expansion

The complete capability roadmap lives in docs/ROADMAP.md and docs/PLATFORM_CAPABILITIES.md. Feature inventory is in docs/FEATURES.md. Implementation work is organized under tasks/.

When adding a capability, first place it in the correct task group and bounded domain. Extend the schema before adding UI-only behavior when the capability affects guest playback or generation. Keep public interactions, analytics, publication, campaigns, story intelligence, distribution, collaboration and marketplace concerns isolated behind explicit boundaries.

The intended long-term model is:

Creator -> Conversation -> DesignBrief -> ExperienceSpec -> Validation -> Runtime -> Artifact -> Publication

AI proposes structured data and patches. Trusted runtime code executes validated data. Generated artifacts never receive platform secrets. Public delivery remains independent from the control plane.
