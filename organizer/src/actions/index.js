import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials) => dispatch => {
    dispatch({ type: LOGIN_START});
    localStorage.removeItem("token");
    return axios
        .post(/*'link to server'*/ credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data, credentials: credentials});
        })
        .catch(err => {
            if (err.response.status === 403) {
                localStorage.removeItem("token");
            }
            dispatch({ type: LOGIN_FAILURE, payload: err.response.message });
        });
}