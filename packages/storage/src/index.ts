export interface ArtifactFile {
  path: string;
  content: Uint8Array;
  contentType: string;
}

export interface ImmutableArtifact {
  artifactId: string;
  contentHash: string;
  files: readonly ArtifactFile[];
}

export interface ArtifactStore {
  put(artifact: ImmutableArtifact): Promise<void>;
  get(artifactId: string): Promise<ImmutableArtifact | undefined>;
  exists(artifactId: string): Promise<boolean>;
}

export type GenerationJobStatus = "queued" | "running" | "failed" | "succeeded";

export interface GenerationJobRecord {
  id: string;
  invitationId: string;
  status: GenerationJobStatus;
  createdAt: string;
  updatedAt: string;
  plan?: unknown;
  error?: {
    code: "INVITATION_SPEC_INVALID" | "GENERATION_FAILED";
    message: string;
    details: unknown[];
  };
}

export interface GenerationIdempotencyRecord {
  invitationId: string;
  key: string;
  jobId: string;
  contentHash: string;
}

export interface GenerationJobStore {
  create(job: GenerationJobRecord): Promise<void>;
  get(jobId: string): Promise<GenerationJobRecord | undefined>;
  update(job: GenerationJobRecord): Promise<void>;
  getIdempotency(
    invitationId: string,
    key: string,
  ): Promise<GenerationIdempotencyRecord | undefined>;
  putIdempotency(record: GenerationIdempotencyRecord): Promise<void>;
}
