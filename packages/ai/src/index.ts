export type AiJobType = "interview" | "storyboard" | "experience-compose" | "copy" | "refine";
export interface AiJob {
  id: string;
  type: AiJobType;
  input: unknown;
}
