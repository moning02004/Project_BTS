import { AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE } from "./actionTypes";

export function loginRequest(username, password) {
  return (dispatch) => {
      dispatch(login());
 
      // API REQUEST
      return axios.post('http://127.0.0.1:8000/user/login', { username, password })
      .then((response) => {
          dispatch(loginSuccess(username));
      }).catch((error) => {
          dispatch(loginFailure());
      });
  };
}
 
export function login() {
    return {
        type: AUTH_LOGIN
    };
}
 
export function loginSuccess(username) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        username
    };
}
 
export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE
    };
}
