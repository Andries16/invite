# Phase 2: AI Creation

## Prototype Mapping

Maps to prototype capability: **Create (AI)**

The AI system is the creative director of the platform. It does not just return text; it produces validated `ExperienceSpec` objects, semantic patches, structured memory boards, and media requirements.

## Architectural Boundaries

### 1. Schema (`packages/ai` internals)

The AI system should not collapse into a single monolithic package. It needs explicit modular boundaries:

- `conversation/`: Chat histories, context compression, role definitions.
- `questions/`: Typed question resolution (e.g., asking the user to clarify missing parameters).
- `design-brief/`: Translating story ingestion into a structured creative direction (DesignBrief).
- `creative-director/`: The orchestrator that takes a DesignBrief and proposes an ExperienceSpec.
- `story-intelligence/`: Extracting people, emotional arcs, and moments from uploaded media/text.
- `proposals/`: Structured schemas mapping LLM outputs into exact JSON/ExperienceSpec updates.
- `patches/`: Deterministic JSON patch application to modify an existing ExperienceSpec.
- `validation/`: Zod safety/structure validation against the generated specs.
- `providers/`: Abstraction layer over LLMs (e.g., Gemini, OpenAI, Claude).
- `evaluation/`: Evals and prompt testing.

### 2. API Domain (`apps/api/src/domains/experiences` & `apps/api/src/domains/story`)

- **Endpoints**: `POST /api/ai/propose-experience`, `POST /api/ai/patch-experience`, `POST /api/ai/extract-story`
- The API securely proxies calls to the Worker/AI package to prevent public exposure of provider keys.

### 3. Creator UI (`apps/creator` & `packages/design-system`)

- **Chat UI**: Interactive message thread, context picker, typing indicators.
- **Experience Builder**: Real-time rendering of the generated `ExperienceSpec` inside the canvas.
- **Context Panel**: Sidebar showing the AI's "Confidence" and "Story Material".
- Must use `@invite/design-system` for strict MUI visual styling.

### 4. Worker & Runtime (`apps/worker` & `apps/public`)

- **Worker**: AI workloads are asynchronous. The worker processes LLM streams, validates outputs, and updates the database record.
- **Runtime**: The public guest app NEVER executes AI code; it only receives the safely validated resulting `ExperienceSpec`.
