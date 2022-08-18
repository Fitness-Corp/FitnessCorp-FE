import { TOGGLE_LOGIN, FETCH_FAIL, FETCH_START, FETCH_SUCCESS, FORM_ERROR, LOG_OUT } from "../actions";

export const initialState = {
    loginPop: false,
    loggedIn: false,
    error: '',
    fetching: false,
}

const reducer = (state= initialState, action)=>{
    switch (action.type) {
        case TOGGLE_LOGIN: {
            return {
                ...state,
                loginPop: !state.loginPop
            }
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                loggedIn: true,
                fetching: false,
                error: '',
            }
        }
        case FETCH_START: {
            return {
                ...state,
                fetching: true,
                error: '',
            }
        }
        case FETCH_FAIL: {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case FORM_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                loggedIn: false
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;
