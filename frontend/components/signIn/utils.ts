import { Dispatch } from "react"
import ReachAPI from "../../APIConsumer"
import { LogInPayload } from "../../APIConsumer/users/types"
import request from "../../transportLayer"

interface SignInHandlerPayload extends LogInPayload {
    dispatch: Dispatch<any>
}

export const signInHandler = async(logInInfo: SignInHandlerPayload) => {
    const res = await request({
        url: "/api/login",
        method: "POST",
        body: JSON.stringify({
            email: logInInfo.email,
            password: logInInfo.password
        })
    })
    // const loginRes = await fetch("/api/login", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         email: logInInfo.email,
    //         password: logInInfo.password
    //     })
    // })
    // const res = await loginRes.json()
    if (!res.error) {
        logInInfo.dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
                id: res.id,
                token: res.token
            }
        })
    } else {
        logInInfo.dispatch({
            type: "LOGIN_FAIL",
            payload: {error: res.error}
        })
    }
    
    
}