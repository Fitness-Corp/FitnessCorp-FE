import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FORM_ERROR = 'FORM_ERROR';
export const LOG_OUT = 'LOG_OUT';
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM= 'REMOVE_ITEM'



export const actions = '';


export const login = (form) => (dispatch) => {

    dispatch(fetchStart())
    axios.post('https://fitnesscorp.herokuapp.com/api/login', form)

        .then(resp => {
            window.localStorage.setItem('login', resp.data.token);
            dispatch(fetchSuccess(form.userName));
        })
        .catch(err => {
            dispatch(fetchFail(err.message));
            console.log(err.message);
        });
};

export const logout = () => {
    window.localStorage.removeItem('login');
    return ({ type: LOG_OUT });
};

export const register = (form) => (dispatch) => {
    dispatch(fetchStart())
    axios.post('https://fitnesscorp.herokuapp.com/api/register', form)
        .then(resp => {
            dispatch(login(form));
        })
        .catch(err => {
            dispatch(fetchFail(err.message));
        });
};

export const validate = (token) => (dispatch) => {
    dispatch(fetchStart())
    console.log(token)
    const config = {
        headers: { authorization: token }
    };
    // axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
    axios.post('https://fitnesscorp.herokuapp.com/api/validate', '', config)
        .then(resp => {
            dispatch(fetchSuccess(resp.message))
            console.log(resp)
        })
        .catch(err => {
            console.log(err)
            dispatch(fetchFail(err.message))
        })
}
export const addCheckOutItem = (item) => {
    return ({ type: ADD_ITEM, payload: item})
}
export const removeFromCart = (item) => {
    return({ type: REMOVE_ITEM, payload: item})
}

export const fetchStart = () => {
    return ({ type: FETCH_START });
};

export const fetchSuccess = (data) => {
    return ({ type: FETCH_SUCCESS, payload: data });
};

export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
};

export const formError = (error) => {
    return ({ type: FORM_ERROR, payload: error });
};

export const toggleLogin = () => {
    return ({ type: TOGGLE_LOGIN });
};