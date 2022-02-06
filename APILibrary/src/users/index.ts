import { Base } from "../base";

export class Users extends Base {
    login(email: string, password: string) {
        return this.request<{id: string, token: string}>('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })
    }
}