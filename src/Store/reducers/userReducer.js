import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  REGISTER_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST

} from "../ActionType/AuthActionType";

const initialState = {
  isLoggingIn: false,
  isRegistering: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  registerEror: false,
  logoutError: false,
  isAuthenticated: false,
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      console.log(action);
      return Object.assign({}, state, {
        ...state,
        isLoggingIn: true,
        loginError: false
      })
    };
    case LOGIN_SUCCESS: {
      console.log(action);
      return Object.assign({}, state, {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user
      });
    }
    case REGISTER_SUCCESS: {
      console.log(action);
      return Object.assign({}, state, {
        ...state,
        user: action.user
      });
    }
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true
      });
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        ...state,
        isLoggingOut: true,
        logoutError: false
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
        user: {}
      });
    case LOGOUT_FAILURE:
      return Object.assign({}, state, {
        ...state,
        isLoggingOut: false,
        logoutError: true
      });
    case VERIFY_REQUEST:
      return Object.assign({}, state, {
        ...state,
        isVerifying: true,
        verifyingError: false
      });
    case VERIFY_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        isVerifying: false
      });
    default:
      return state;
  }
};