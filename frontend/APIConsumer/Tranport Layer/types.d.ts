export interface RequestPayload {
    body: any;
    headers: any;
    method: string;
    endPoint: string;
    route: string;
}
export interface TransportParams {
    headers?: any;
    jwt: string;
}
export declare const defaultTransportParams: {
    headers: {};
    jwt: string;
};
