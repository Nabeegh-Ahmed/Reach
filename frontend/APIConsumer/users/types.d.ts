export interface RegisterPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
export interface LogInPayload {
    email: string;
    password: string;
}
export interface AuthenticatedUser {
    message: string;
    id: number;
    token: string;
}
