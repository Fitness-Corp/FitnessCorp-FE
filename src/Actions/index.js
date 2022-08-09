import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FORM_ERROR = 'FORM_ERROR'
export const LOG_OUT = 'LOG_OUT'


export const actions = ''


export const login = (form) => (dispatch) => {
    
    dispatch(fetchStart())
    axios.post('https://tv-weather-app-login.herokuapp.com/api/login', form)
        .then(resp => {
            window.localStorage.setItem('login', resp.token)
            dispatch(fetchSuccess(form.userName))
        })
        .catch(err => {
            dispatch(fetchFail(err.response.data.originalMessage))
        })
}

export const logout = () => {
    window.localStorage.removeItem('login')
    return({type: LOG_OUT})
}

export const register = (form) => (dispatch) => {
    dispatch(fetchStart())
    axios.post('https://tv-weather-app-login.herokuapp.com/api/register', form)
        .then(resp => {
            dispatch(login(form))
        })
        .catch(err => {
            dispatch(fetchFail(err))
        })
}

export const fetchStart = () => {
    return({type: FETCH_START})
}

export const fetchSuccess = (data) => {
    return({type:FETCH_SUCCESS, payload:data})
}

export const fetchFail = (error) => {
    return({type:FETCH_FAIL, payload: error})
}

export const formError = (error) => {
    return({type:FORM_ERROR, payload: error})
}