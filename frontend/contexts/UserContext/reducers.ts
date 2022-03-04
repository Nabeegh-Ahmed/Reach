import { IUserState } from "./types";
import { Actions } from "./types";

export const initialUserState: IUserState = {
    isAuth: false,
    user: null,
    error: '',
    loading: false,
}

export const userReducer = (state: IUserState, action: Actions): IUserState => {
    switch (action.type) {
        case "LOGIN_REQUEST": {
            return {
                ...state,
                loading: true
            }
        }

        case "LOGIN_SUCCESS": {
            const { id, email, username } = action.payload
            return {
                ...state,
                isAuth: true,
                loading: false,
                error: '',
                user: {
                    id: id,
                    email: email,
                    username: username
                },
            }
        }

        case "LOGIN_FAIL": {
            return {
                ...state,
                isAuth: false,
                user: null,
                error: action.payload?.error,
                loading: false
            }
        }

        case "LOGOUT_SUCCESS": {
            return {
                ...state,
                isAuth: false,
                user: null,
                loading: false,
                error: ''
            }
        }

        case "LOGOUT_REQUEST": {
            return {
                ...state,
                loading: true
            }
        }

        case "REGISTER_REQUEST": {
            return {
                ...state,
                loading: true
            }
        }

        case "REGISTER_SUCCESS": {
            const { id, email, username } = action.payload
            return {
                ...state,
                isAuth: true,
                loading: false,
                error: '',
                user: {
                    id: id,
                    email: email,
                    username: username
                }
            }
        }

        case "REGISTER_FAIL": {
            return {
                ...state,
                isAuth: false,
                user: null,
                error: action.payload.error,
                loading: false
            }
        }

        default: {
            return state
        }
    }
}