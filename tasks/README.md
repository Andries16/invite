# Task System

Implementation tasks map 1:1 to the prototype capabilities. Each task is a vertical slice specifying:
1. **Schema**: Cross-package typing (`packages/*-schema`)
2. **API**: Control plane boundaries (`apps/api/src/domains/*`)
3. **Creator UI**: SaaS UI using MUI 9.4.0 (`apps/creator` & `packages/design-system`)
4. **Worker / Runtime**: Async processing (`apps/worker`) and public rendering (`apps/public`)

See subdirectories for specific phase breakdowns.
