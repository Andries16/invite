export interface ExperienceService { getExperience(id: string): Promise<unknown>; publishExperience(id: string): Promise<void>; }
