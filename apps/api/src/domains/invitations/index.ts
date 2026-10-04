export interface InvitationService { getInvitation(id: string): Promise<unknown>; createInvitation(input: unknown): Promise<unknown>; }
