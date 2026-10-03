# Invite.md — Rendering and Static Generation

Status: Proposed.

## 1. Rendering principle

The renderer converts a validated InvitationSpec into a deterministic web application.

```
InvitationSpec
 + DesignSpec
 + resolved assets
 + renderer version
 = build input
```

The output is immutable.

## 2. Trusted component registry

Every renderable component belongs to a registry.

Conceptually:

```ts
const components = {
  hero: Hero,
  text: TextSection,
  image: ImageSection,
  gallery: Gallery,
  event: EventDetails,
  countdown: Countdown,
  timeline: Timeline,
  rsvp: RSVP,
  quiz: Quiz,
  reveal: Reveal,
  footer: Footer,
};
```

InvitationSpec references component types by stable identifiers.

Unknown components fail validation.

## 3. No arbitrary component imports

A spec must not contain:

- JavaScript imports
- npm package names
- URLs to executable modules
- arbitrary JSX
- arbitrary CSS source
- shell commands

The renderer chooses implementation code.

## 4. Build input resolution

Before rendering:

1. load immutable invitation version;
2. validate InvitationSpec;
3. resolve referenced assets;
4. validate asset availability;
5. resolve theme;
6. resolve renderer version;
7. normalize content;
8. generate route metadata;
9. render.

## 5. Static output

The build should produce:

- HTML
- JavaScript bundles if required
- CSS
- optimized images
- media metadata
- manifest
- favicon/OG assets where applicable
- machine-readable build metadata

Build metadata should include:

- invitation ID
- version ID
- renderer version
- spec version
- build ID
- asset references

Do not expose internal identifiers unnecessarily in public HTML.

## 6. Determinism

Given identical:

- spec
- assets
- renderer version
- theme version

the generated artifact should be functionally identical.

Randomness must be seeded or eliminated.

Time-dependent content must be explicit, e.g. countdown based on an event timestamp.

## 7. Build isolation

Builds are untrusted-input processing.

The worker must enforce:

- CPU limit
- memory limit
- execution timeout
- filesystem isolation
- network restrictions
- output-size limit
- process cleanup

The build process must not have production credentials.

## 8. Artifact validation

Before publication validate:

- expected files exist
- HTML parses
- no forbidden script source
- no accidental secret values
- asset references resolve
- no absolute local filesystem paths
- output size limits
- required metadata
- valid content types
- no prohibited inline content
- mobile viewport metadata
- basic accessibility signals

## 9. Versioned renderer

Renderer versions should be immutable.

Example:

```
renderer@1
renderer@2
renderer@3
```

A published invitation remains associated with the renderer version used to produce it.

A new renderer does not silently mutate an existing published artifact.

Users can explicitly regenerate.

## 10. Preview versus production

Preview should use the same component system and design semantics as production.

Differences may include:

- draft data
- editor overlays
- development-only controls
- faster asset loading
- hot updates

The visual result should not depend on an entirely different rendering implementation.

## 11. Performance

Generated sites should prioritize:

- small critical HTML
- responsive images
- lazy noncritical media
- preloading only critical assets
- compressed fonts
- minimal JavaScript
- no unnecessary framework hydration
- animation that does not block content
- caching with immutable asset names

## 12. Failure behavior

A failed generation must not replace the currently published version.

Publication is a pointer switch:

```
stable URL -> published artifact A
```

Generate B.

If B fails:

```
stable URL -> A
```

If B succeeds and passes validation:

```
stable URL -> B
```

## 13. Build provenance

Store enough metadata to reproduce/debug a build:

- spec hash
- asset manifest hash
- renderer version
- theme version
- build timestamp
- toolchain version
- worker version

Avoid storing sensitive prompt content in public artifacts.
