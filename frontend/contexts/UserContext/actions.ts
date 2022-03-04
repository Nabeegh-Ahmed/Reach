import { Dispatch } from "react"

export const checkUserLoggedIn = (dispatch: Dispatch<any>) => {
    dispatch({type: "LOGIN_REQUEST"})
    
    dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
        
        }
    })
            
    dispatch({type: "LOGIN_FAIL"})
}