import { AuthenticatedUser, LogInPayload, RegisterPayload } from "./types";
declare class Users {
    private route;
    login(userData: LogInPayload): Promise<AuthenticatedUser>;
    register(userData: RegisterPayload): Promise<AuthenticatedUser>;
}
export default Users;
