export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const GET_STATUS = "GET_STATUS";
export const GET_STATUS_SUCCESS = "GET_STATUS_SUCCESS";
export const GET_STATUS_CLEAR = "GET_STATUS_CLEAR";

const axios = require('axios');
const decoder = require('jwt-decode');

export const login = () => ({
    type: LOGIN
});

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    token
});
export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

export const register = () => ({
    type: REGISTER
});
export const registerSuccess = () => ({
    type: REGISTER_SUCCESS
});
export const registerFailure = () => ({
    type: REGISTER_FAILURE
});

export const getStatus = () => ({
    type: GET_STATUS
})
export const getStatusSuccess = (user_id, nickname, grade) => ({
    type: GET_STATUS_SUCCESS,
    user_id,
    nickname,
    grade
})
export const getStatusClear = () => ({
    type: GET_STATUS_CLEAR
})

export const loginRequest = (username, password) => {
    return (dispatch) => {
        dispatch(login());
        return axios.post('http://127.0.0.1:8000/user/login/', {
            username: username,
            password: password
        }).then( response => {
            dispatch(loginSuccess(response.data.token));
        }).catch( error => {
            dispatch(loginFailure);
        });
    }
}

export const registerRequest = (username, password, nickname) => {
    return (dispatch) => {
        console.log(username, password, nickname);
        dispatch(register());
    }
}

export const statusRequest = (user_id) => {
    return (dispatch) => {
        dispatch(getStatus());
        return axios.get('http://127.0.0.1:8000/user/profile/'+String(user_id)+"/").then( response => {
            let { id, nickname, grade } = response.data;
            dispatch(getStatusSuccess(id, nickname, grade))
        }).catch( error => {
            dispatch(getStatusClear())
        });
    }
}