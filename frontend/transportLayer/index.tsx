import { TransportLayerInputPayload } from "./types";

const request = async (payload: TransportLayerInputPayload) => {
    const res = await fetch(payload.url, {
        method: payload.method,
        body: payload.body,
        headers: {
            ...payload.headers,
            "Content-Type": "application/json",
        }
        
    })

    return res.json()
}

export default request