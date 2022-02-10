import { Base } from "../base";

// Class that handles all the user related requests
export class Users extends Base {
    /**
     * Log's in a user
     * @param email String (user's email address)
     * @param password String (user's password)
     * @returns user id and token
     */
    login(email: string, password: string) {
        return this.request<{id: string, token: string}>('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        })
    }
    /**
     * Register's a user for provided data
     * @param firstName String (user's first name)
     * @param lastName String (user's last name)
     * @param email String (user's email address)
     * @param password String (user's password)
     * @returns user id and token
     */
    register(firstName: string, lastName: string, email: string, password: string) {
        return this.request<{id: string, token: string}>('/api/user/register', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, password })
        })
    }
}