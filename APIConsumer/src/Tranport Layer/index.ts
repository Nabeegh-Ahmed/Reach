import fetch from 'node-fetch';
import { RequestPayload } from './types';

export const request = async (payload: RequestPayload) => {
    if (payload.method === 'POST' || payload.method === 'post') {
        const response = await fetch(process.env.baseURL + payload.route + payload.endPoint, {
            method: payload.method,
            headers: {
                "content-type": "application/json",
                ...payload.headers
            },
            body: JSON.stringify(payload.body)
        })
        return response.json()
    } else if (payload.method === 'GET' || payload.method === 'get') {
        const response = await fetch(process.env.baseURL + payload.route + payload.endPoint, {
            method: payload.method,
            headers: {
                'content-type': 'application/json',
                ...payload.headers
            }
        })
        return response.json()
    }
}