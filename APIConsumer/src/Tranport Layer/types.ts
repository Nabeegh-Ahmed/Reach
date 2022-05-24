export interface RequestPayload {
    body: any
    headers: any
    method: string
    endPoint: string
    route: string
}

export interface TransportParams {
    headers?: any
    jwt: string
}

export const defaultTransportParams = {
    headers: {},
    jwt: ''
}