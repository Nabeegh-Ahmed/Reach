import axios, { Method } from "axios"

export abstract class Base {
    private basePath: string = ''
    constructor() {
        this.basePath = 'http://localhost:5000'
    }
    protected request<T> (endPoint: string, options?: any): Promise<T> {
        const url = `${this.basePath}${endPoint}`
        const headers = {
            'Content-Type': 'application/json',
        }
        const config = {
            ...options,
            headers
        }
        return axios({
            url,
            ...config
        }).then(res => {
            if (res.status >= 200 && res.status < 300) {
                return res.data
            } else {
                throw new Error(res.statusText)
            }
        })
    }
}