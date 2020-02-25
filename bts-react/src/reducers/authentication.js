import * as types from '../actions/Authentication';
 
const initialState = {
    login: {
        status: 'INIT',
        token: ''
    },
    register: {
        status: 'INIT',
    },
    status: {
        isAuth: false,
        currentUser: {
            user_id: 0,
            username: '',
            nickname: ''
        }
    }
};
 
function authentication(state = initialState, action) {
    switch(action.type) {
      // login
        case types.LOGIN:
            return {
              ...state,
              login:{
                  status: 'LOGIN',
              }
          }
        case types.LOGIN_SUCCESS:
          return {
              ...state,
              login:{
                  status: 'SUCCESS',
                  token: action.token
              }
          }
      case types.LOGIN_FAILURE:
          return {
              ...state,
              login:{
                  status: 'FAILURE',
              }
          }
    case types.REGISTER:
        return {
            ...state,
            register: {
                status: 'WAITING',
            }
        }
    case types.REGISTER_SUCCESS:
        return {
            ...state,
            register: {
                status: 'SUCCESS'
            }
        }
    case types.REGISTER_FAILURE:
        return {
            ...state,
            register:{
                status: 'FAILURE',
            }
        }
    // status
    case types.GET_STATUS:
        return {
            ...state,
            status:{
                ...state.status
            }
        }
    case types.GET_STATUS_SUCCESS:
        return {
            ...state,
            status:{
                isAuth: true,
                currentUser: {
                    user_id: action.user_id,
                    username: action.username,
                    nickname: action.nickname
                }
            }
        }
    case types.GET_STATUS_CLEAR:
        return {
            ...state,
            status:{
                isAuth: false,
                currentUser: {
                    user_id: 0,
                    username: '',
                    nickname: ''
                }
            }
        }
        
    default:
      return state;
  }
};

export default authentication;