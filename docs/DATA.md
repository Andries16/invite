# Data Architecture

## Principles
Separate application state, binary assets and generated artifacts. Use IDs for relationships. Keep published versions immutable.

## Core entities
User, Project, Invitation, InvitationVersion, Conversation, Message, Asset, GenerationJob, Artifact, Publication, Campaign and Recipient.

## Invitation
The logical public identity.

~~~text
id
projectId
slug
type
status
currentVersionId
createdAt
updatedAt
~~~

## InvitationVersion
Immutable InvitationSpec snapshot and generation metadata.

~~~text
id
invitationId
schemaVersion
rendererVersion
spec
artifactId
createdAt
~~~

## InvitationSpec
Illustrative shape:

~~~ts
type InvitationSpec = {
  schemaVersion: string;
  type: InvitationType;
  locale: string;
  metadata: Metadata;
  people: Person[];
  event?: EventDetails;
  content: ContentModel;
  sections: Section[];
  theme: ThemeSpec;
  interactions?: InteractionSpec[];
  assets: AssetReference[];
  variables?: VariableDefinition[];
  features?: FeatureFlags;
};
~~~

The canonical schema belongs in a dedicated package and is versioned.

## Storage
Database: metadata, specifications, relationships, job state, authorization data and aggregates.

Object storage: original uploads, processed media, static artifacts and temporary generation output.

## Immutability
Publishing a new version creates a new immutable artifact. The logical invitation points to the current artifact. Rollback changes the pointer.

## Tenant isolation
Every tenant-owned resource needs an ownership boundary. Authorization belongs in services, not only the frontend.

## Retention
Define retention for conversations, originals, generated artifacts, logs and analytics. Deleting an invitation must not leave private assets orphaned indefinitely.


## Experience entities

The experience layer extends InvitationSpec without coupling the public runtime to creator implementation details.

~~~text
ExperienceSpec
  schemaVersion
  invitationId
  story
  scenes[]
  design
  interactions[]
  media[]
  audio
  variables[]
  analytics
~~~

A SceneSpec contains an id, order, purpose, trigger, content, media references, motion, interaction references and optional duration.

Supported trigger types are load, scroll, click, timed transition and interaction-complete.

The canonical schema belongs in a versioned invitation/experience schema package. Public runtime code only receives validated, public-safe data.

## Personalization

Variables are explicit and typed. Example variables include guest.name, guest.photo, guest.message, guest.code, guest.table and guest.rsvpUrl. Variable interpolation must not permit arbitrary code execution or access to platform secrets.

## Interaction data

Public interactions can emit structured events such as scene_started, scene_completed, choice_selected, reveal_opened, quiz_completed, rsvp_started, rsvp_submitted and guestbook_submitted. Event payloads must be minimized and privacy-aware.

## Media

Supported media classes include image, GIF, video, audio, voice note, sticker, map and screenshot. Originals and processed derivatives remain in object storage. The database stores metadata, ownership, processing state and references.

## Campaign reuse

Campaign recipients normally point to the same generated experience artifact while resolving safe recipient variables at runtime or at a controlled generation boundary. The platform must avoid building hundreds of logically identical applications.
