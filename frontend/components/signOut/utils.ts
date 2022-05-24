import { Dispatch } from "react"

interface SignOutHandlerPayload {
    dispatch: Dispatch<any>
}

export const signOutHandler = async(signOutPayload: SignOutHandlerPayload) => {
    const loginRes = await fetch("/api/logout", {
        method: "POST"
    })
    const res = await loginRes.json()
    if (res.message === "Success") {
        signOutPayload.dispatch({
            type: "LOGOUT_SUCCESS"
        })
    } else {
        signOutPayload.dispatch({
            type: "LOGOUT_FAILED",
            payload: res.error
        })
    }
}