export interface MediaService { createAsset(input: unknown): Promise<unknown>; getAsset(id: string): Promise<unknown>; }
