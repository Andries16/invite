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
