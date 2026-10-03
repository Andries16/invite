# Invite.md — Detailed Data Model

Status: Proposed conceptual model.

## 1. Identity

### User

Represents an authenticated account.

### Membership

Connects a user to a project with a role.

Roles may include:

- owner
- editor
- viewer

Authorization is project-scoped.

## 2. Project

A project is the main tenant-like container.

It owns:

- invitations
- campaigns
- conversations
- assets
- analytics
- members

## 3. Invitation

An invitation is the logical product.

Conceptual fields:

```
id
projectId
name
slug
status
currentDraftVersionId
publishedVersionId
createdAt
updatedAt
```

The invitation is not itself the rendered artifact.

## 4. InvitationVersion

An immutable creative state.

Conceptual fields:

```
id
invitationId
versionNumber
specVersion
invitationSpec
designSpec
createdBy
createdAt
parentVersionId
```

Once published, the version content should be immutable.

## 5. Conversation

Stores the authoring process.

It may contain:

- messages
- extracted facts
- design brief
- AI metadata
- interaction history
- current state

The conversation is not the final source of rendering truth.

## 6. Asset

See ASSETS.md.

## 7. GenerationJob

Tracks asynchronous generation.

Fields:

```
id
projectId
invitationVersionId
status
attempt
rendererVersion
inputHash
artifactId
errorCode
createdAt
startedAt
completedAt
```

## 8. Artifact

Represents an immutable build output.

Fields:

```
id
generationJobId
storagePrefix
manifest
sizeBytes
contentHash
rendererVersion
createdAt
```

## 9. Publication

Maps stable public access to an artifact.

Fields:

```
id
invitationId
artifactId
status
slug
publishedAt
unpublishedAt
```

There should be at most one active publication pointer for a normal invitation.

## 10. Campaign

Defines a reusable template and recipient collection.

## 11. Recipient

Contains personalization data and publication mapping.

Recipient data should be encrypted/protected when it contains private information.

## 12. PublicInteraction

Represents public actions such as RSVP.

Keep public write models separate from internal entities.

Example:

```
PublicRSVPRequest
 -> validate
 -> resolve invitation/recipient
 -> domain command
```

Do not expose database entity schemas as public API schemas.

## 13. AnalyticsEvent

Store a minimal event shape:

```
eventId
publicationId
eventType
occurredAt
anonymous/session identifier
metadata
```

Avoid collecting unnecessary personal data.

## 14. Versioning

Schema versions must be explicit.

InvitationSpec should have a version:

```
specVersion: "1"
```

Migration functions should convert older specs into newer internal versions where practical.

Never assume an old JSON shape is current forever.

## 15. Deletion

Deletion should be lifecycle-aware.

Deleting an invitation may require:

1. unpublish;
2. revoke public access;
3. retain audit metadata if required;
4. schedule artifact deletion;
5. delete assets no longer reachable;
6. delete conversations according to retention policy.

Use asynchronous cleanup for large object graphs.

## 16. Database independence

Business logic should not assume SQL or Mongo-specific behavior.

Repository interfaces should express domain needs rather than generic CRUD.

Bad:

```
repository.find({ anyMongoQuery })
```

Prefer:

```
invitationRepository.findById(id)
invitationRepository.findPublishedBySlug(slug)
```

## 17. Transactions

Use transactions for coupled state changes where the selected database supports them.

Examples:

- create publication + update invitation pointer
- consume idempotency key + persist command result

Queue jobs should use an outbox or equivalent reliable handoff where loss would be harmful.
