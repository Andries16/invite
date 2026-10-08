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
