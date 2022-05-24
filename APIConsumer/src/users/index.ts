import { request } from "../Tranport Layer";
import { AuthenticatedUser, LogInPayload, RegisterPayload } from "./types";
import { UserEndPoints } from './endPoints'

class Users {
    private route = '/user'
    async login(userData: LogInPayload): Promise<AuthenticatedUser> {
        return request({ endPoint: UserEndPoints.login, route: this.route, method: 'POST', body: userData, headers: null })
    }
    async register(userData: RegisterPayload): Promise<AuthenticatedUser> {
        return request({ endPoint: UserEndPoints.register, route: this.route, method: 'POST', body: userData, headers: null})
    }
}

export default Users