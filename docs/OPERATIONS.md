# Invite.md — Production Operations

Status: Proposed.

## 1. Environments

At minimum:

- local
- test/CI
- staging
- production

Staging should exercise the same major architecture as production.

## 2. Deployment units

Deploy independently where useful:

- creator
- API
- worker
- renderer
- public delivery layer

The exact deployment platform is replaceable.

## 3. Database migrations

Every schema change requires:

1. migration;
2. backward-compatibility analysis;
3. deployment order;
4. rollback/forward-fix strategy;
5. data migration if required.

Avoid destructive migrations in the same release that introduces code depending on the new shape.

## 4. Zero-downtime principle

A deployment should tolerate old and new application instances running together during rollout.

API and job schemas should therefore be compatible across one deployment boundary.

## 5. Artifact rollback

Rollback should not require rebuilding.

If build A is currently published and build B was just published:

```
publication -> B
```

can be changed back to:

```
publication -> A
```

provided A remains retained.

## 6. Health checks

Services should expose:

- liveness
- readiness

Readiness should verify only dependencies required to serve traffic.

Do not make liveness depend on a slow external provider.

## 7. Monitoring

Monitor:

### API
- latency
- error rate
- throughput
- authentication failures

### AI
- latency
- failure rate
- token/cost usage
- rate limits

### Generation
- queue depth
- build duration
- failure rate
- artifact size

### Public
- request rate
- cache hit ratio
- error rate
- origin load

### Storage
- capacity
- request errors
- orphan growth

## 8. Alerts

Alerts should correspond to actionable conditions.

Examples:

- public 5xx sustained above threshold
- generation failure rate elevated
- queue backlog growing
- storage unavailable
- database unavailable
- authentication outage
- unusually high public write traffic

## 9. Backups

Back up:

- database
- critical configuration
- metadata required to locate artifacts

Object storage should have its own durability/retention strategy.

## 10. Disaster recovery

Document:

- RPO
- RTO
- restore procedure
- credential rotation
- DNS/CDN recovery
- object storage recovery
- publication reconstruction

## 11. Cost controls

Major cost drivers:

- AI tokens
- media storage
- video processing
- CDN bandwidth
- generation compute

Track usage per project/account.

## 12. Abuse controls

The platform should be able to suspend:

- AI generation
- uploads
- public publication
- public interactions

at project/account level.

## 13. Runbooks

Maintain runbooks for:

- generation backlog
- failed deployments
- database outage
- object storage outage
- CDN outage
- compromised credentials
- malicious upload
- public abuse
- AI provider outage

## 14. Provider outage

AI generation should degrade gracefully.

If the primary provider is unavailable:

- queue or retry where appropriate;
- preserve current drafts;
- do not destroy existing invitations;
- optionally fail over to an approved provider.

Existing public invitations must remain available even if AI is completely offline.
