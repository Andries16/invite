CREATE TABLE IF NOT EXISTS generation_jobs (
  id UUID PRIMARY KEY,
  invitation_id TEXT NOT NULL,
  content_hash TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('queued', 'running', 'failed', 'succeeded')),
  spec JSONB NOT NULL,
  plan JSONB,
  error JSONB,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS generation_jobs_invitation_created_idx
  ON generation_jobs (invitation_id, created_at DESC);

CREATE TABLE IF NOT EXISTS generation_idempotency_keys (
  invitation_id TEXT NOT NULL,
  idempotency_key TEXT NOT NULL,
  content_hash TEXT NOT NULL,
  job_id UUID NOT NULL REFERENCES generation_jobs (id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (invitation_id, idempotency_key)
);

CREATE INDEX IF NOT EXISTS generation_idempotency_job_idx
  ON generation_idempotency_keys (job_id);
