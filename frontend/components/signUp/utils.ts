import { Dispatch } from "react"
import { RegisterPayload } from "../../APIConsumer/users/types"
import request from "../../transportLayer"

interface SignUpHandlerPayload extends RegisterPayload {
    dispatch: Dispatch<any>
}

export const signUpHandler = async(signUpInfo: SignUpHandlerPayload) => {
    const res = await request({
        url: "/api/register",
        method: "POST",
        body: JSON.stringify({
            email: signUpInfo.email,
            firstName: signUpInfo.firstName,
            lastName: signUpInfo.lastName,
            password: signUpInfo.password
        })
    })
    console.log(res)
    if (!res.error) {
        signUpInfo.dispatch({
            type: "REGISTER_SUCCESS",
            payload: {
                id: res.id,
                token: res.token
            }
        })
    } else {
        signUpInfo.dispatch({
            type: "REGISTER_FAIL",
            payload: {error: res.error}
        })
    }
}