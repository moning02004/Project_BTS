export const SIGNIN = "SIGNIN";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

export const SIGNUP = "SIGNUP";
export const SIGNUP_CHECK_SUCCESS = "SIGNUP_CHECK_SUCCESS";
export const SIGNUP_CHECK_FAILURE = "SIGNUP_CHECK_FAILURE";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const GET_STATUS = "GET_STATUS";
export const GET_STATUS_SUCCESS = "GET_STATUS_SUCCESS";
export const GET_STATUS_CLEAR = "GET_STATUS_CLEAR";

const axios = require('axios');

export const signin = () => ({
    type: SIGNIN
});

export const signinSuccess = (token) => ({
    type: SIGNIN_SUCCESS,
    token
});
export const signinFailure = () => ({
    type: SIGNIN_FAILURE
});

export const signup = () => ({
    type: SIGNUP
});
export const signupCheckSuccess = () => ({
    type: SIGNUP_CHECK_SUCCESS
});
export const signupCheckFailure = () => ({
    type: SIGNUP_CHECK_FAILURE
});
export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS
});
export const signupFailure = () => ({
    type: SIGNUP_FAILURE
});

export const getStatus = () => ({
    type: GET_STATUS
})
export const getStatusSuccess = (user_id, username,nickname, grade, point) => ({
    type: GET_STATUS_SUCCESS,
    user_id,
    username,
    nickname,
    grade,
    point
})
export const getStatusClear = () => ({
    type: GET_STATUS_CLEAR
})

export const signinRequest = (username, password) => {
    return (dispatch) => {
        dispatch(signin());
        return axios.post('http://127.0.0.1:8000/user/signin/', {
            username: username,
            password: password
        }).then( response => {
            dispatch(signinSuccess(response.data.token));
        }).catch( error => {
            dispatch(signinFailure);
        });
    }
}

export const signupRequest = (username, password, nickname) => {
    return (dispatch) => {
        dispatch(signup());
        return axios.post('http://127.0.0.1:8000/user/signup/', {
            username: username,
            password: password,
            nickname: nickname
        }).then( response => {
            dispatch(signupSuccess());
        }).catch( error => {
            dispatch(signupFailure());
        });
    }
}

export const statusRequest = (user_id) => {
    return (dispatch) => {
        dispatch(getStatus());
        return axios.get('http://127.0.0.1:8000/user/profile/'+String(user_id)+"/").then( response => {
            let { id, username, nickname, grade, point } = response.data;
            dispatch(getStatusSuccess(id, username, nickname, grade, point))
        }).catch( error => {
            dispatch(getStatusClear())
        });
    }
}

export const checkUsernameRequest = (username) => {
    return (dispatch) => {
        return axios.post('http://127.0.0.1:8000/user/check/', {
            username: username
        }).then( response => {
            if (response.data.message === "OK") dispatch(signupCheckSuccess())
            else dispatch(signupCheckFailure());
        }).catch( error => {
            dispatch(signupCheckFailure());
        });
    }
}