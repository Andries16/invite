CREATE TABLE generation_jobs (
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

CREATE INDEX generation_jobs_invitation_id_idx
  ON generation_jobs (invitation_id);

CREATE INDEX generation_jobs_status_idx
  ON generation_jobs (status);

CREATE TABLE generation_idempotency (
  invitation_id TEXT NOT NULL,
  idempotency_key TEXT NOT NULL,
  content_hash TEXT NOT NULL,
  job_id UUID NOT NULL REFERENCES generation_jobs(id),
  created_at TIMESTAMPTZ NOT NULL,
  PRIMARY KEY (invitation_id, idempotency_key)
);

CREATE INDEX generation_idempotency_job_id_idx
  ON generation_idempotency (job_id);
