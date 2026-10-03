# Invite.md

Invite.md is an AI-powered platform for creating personalized invitation and declaration websites.

A user describes an occasion through a conversational AI interface. The system gathers useful information, proposes creative directions, creates a structured InvitationSpec, renders it through trusted React components, builds a static artifact, and publishes it behind a stable public URL.

## Architecture

~~~text
User
  -> Creator
  -> API / Application Services
       -> Database
       -> AI Provider
       -> Object Storage
       -> Job Queue
  -> Generation Worker
       -> InvitationSpec validation
       -> React renderer
       -> static build
       -> artifact validation
  -> CDN / Edge
  -> stable invite.md URL
~~~

## AI implementation instructions

- [AGENTS.md](AGENTS.md)
- [Product](docs/PRODUCT.md)
- [Architecture](docs/ARCHITECTURE.md)
- [AI architecture](docs/AI.md)
- [Data model](docs/DATA.md)
- [Generation](docs/GENERATION.md)
- [Infrastructure](docs/INFRASTRUCTURE.md)
- [API](docs/API.md)
- [Security](docs/SECURITY.md)
- [Testing](docs/TESTING.md)
- [Conventions](docs/CONVENTIONS.md)
- [Domain docs](docs/domains/README.md)
- [ADRs](docs/adr/README.md)

This repository is intentionally architecture-first. Documents marked Proposed are design direction, not irreversible decisions.
