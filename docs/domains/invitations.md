# Invitations

An Invitation is the stable logical identity of a public experience. It is not a build.

## Lifecycle

```text
draft -> generating -> published
                  -> failed
published -> generating -> published
```

A current published version remains valid while a new version is generated.

## Invariants

- one stable logical identity
- immutable published versions
- only validated InvitationSpec can be generated
- publication changes a pointer
- slugs are unique in their namespace

Invitation type should normally be configuration/template data, not a separate application.
