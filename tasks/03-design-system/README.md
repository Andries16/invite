# Phase 3: Design System

## Prototype Mapping
Maps to prototype capability: **Visual Languages, Recipes, Typography, and Motion**

## Architectural Boundaries

### 1. Schema (`packages/invitation-schema`)
- `DesignSpec`: Visual language, tokens, typography, layout, motion.

### 2. API Domain
- Internal registry for recipes and themes.

### 3. Creator UI (`packages/design-system`)
- **Strict Requirement**: Must use MUI 9.4.0 and Emotion.
- `src/theme/`: MUI Theme configuration.
- `src/tokens/`: Core SaaS tokens.
- `src/components/`: Reusable creator components (not for guest apps).

### 4. Worker & Runtime
- **Strict Requirement**: The public guest app must NOT inherit MUI. It uses raw vanilla/tailwind or custom lightweight CSS tailored strictly to the `DesignSpec`.
