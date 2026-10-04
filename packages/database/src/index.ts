export interface DatabaseClient { query<T>(operation: string, input?: unknown): Promise<T>; }
