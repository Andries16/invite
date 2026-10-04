# Engineering Conventions

## Coding rules

These rules are mandatory for all code in the repository, human or AI written.

| Rule                  | Requirement                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------- |
| React components      | Arrow functions assigned to `const` only. Never `function` declarations or class components. |
| Atomic files          | One responsibility per file. One exported component per component file.                      |
| File size             | No file may exceed 500 lines. Split into smaller modules before reaching the limit.          |
| File and folder names | kebab-case only, e.g. `invitation-preview.tsx`, `campaign-recipients/`.                      |
| Comments              | No comments in code. Express intent through clear names, small functions and types.          |
| `any`                 | Never use `any`, `as any` or `@ts-ignore`.                                                   |
| Typing                | Strong, strict TypeScript everywhere.                                                        |

## TypeScript

Use strict TypeScript, explicit public types, discriminated unions and schema-derived external types.

- `strict: true` in every `tsconfig`.
- Never use `any`, `as any`, `as unknown as T`, `@ts-ignore` or `@ts-expect-error`.
- Use `unknown` for untrusted values and narrow with schema validation or type guards.
- Avoid type assertions (`as T`); rely on inference, generics and schema-derived types.
- Avoid non-null assertions (`!`); handle the missing case explicitly.
- Type every exported function signature and component props.
- Prefer `type` aliases and discriminated unions over loose optional fields.
- Model exhaustive branching with `never` checks.
- Avoid hidden global state.

## React

- Define every component as a `const` arrow function:

```tsx
type InvitationTitleProps = {
  title: string;
};

export const InvitationTitle = ({ title }: InvitationTitleProps) => (
  <h1>{title}</h1>
);
```

- Never use `function` declarations or class components.
- Keep components atomic: small, single-purpose and composable.
- Extract duplicated UI and logic into reusable components and hooks.
- Use `useCallback` and `useMemo` where they prevent unnecessary re-renders.
- Keep hooks in their own files, named `use-<name>.ts`.

## File structure

- One responsibility per file.
- Maximum 500 lines per file. Split before reaching the limit.
- File and folder names use kebab-case: `invitation-spec.ts`, `use-invitation-draft.ts`, `generation-worker/`.
- Identifiers inside files keep standard TypeScript casing: `PascalCase` for components and types, `camelCase` for values and functions.

## Comments

- Do not write comments in code.
- Code must be self-explanatory through naming, small functions and precise types.
- Rationale and design decisions belong in docs and ADRs, not in code comments.

## Domain boundaries

Prefer:

```text
domain -> application -> adapters/infrastructure
```

Business rules should not live in controllers.

## Naming

Use nouns for entities and verbs for commands.

Examples: Invitation, Campaign, GenerationJob, publishInvitation(), generateInvitation().

## Async jobs

Every job has a stable ID, status, timestamps, attempt count, failure information, correlation ID and idempotency behavior.

## Logging

Use structured logs with service, environment, request/job ID and safe entity IDs. Never log secrets.

## Configuration

Centralize configuration parsing and validation. Fail fast on invalid required configuration.

## Dependencies

Before adding a dependency, check maintenance, bundle/runtime impact, security and whether existing code can solve the problem.

## Documentation

Changes to public contracts, persistent models, invariants or architecture require documentation.

## Commits

Prefer focused commits with clear messages.
