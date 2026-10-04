# Phase 4: Media

## Prototype Mapping
Maps to prototype capability: **Media Library (Images, GIFs, Audio, Video)**

## Architectural Boundaries

### 1. Schema (`packages/media`)
- Asset schemas mapping to original files and derivatives.

### 2. API Domain (`apps/api/src/domains/media`)
- Pre-signed URLs for upload, asset inspection endpoints.

### 3. Creator UI (`apps/creator`)
- Media picker, upload progress states, asset AI suggestions.

### 4. Worker & Runtime (`apps/worker`)
- Background jobs for processing video processing, image resizing, SVG sanitization.
