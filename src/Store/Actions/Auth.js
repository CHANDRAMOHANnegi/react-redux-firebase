import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS, REGISTER_FAILURE,
    LOGOUT_FAILURE, REGISTER_REQUEST,
    VERIFY_REQUEST, REGISTER_SUCCESS,
    VERIFY_SUCCESS
} from "../ActionType/AuthActionType";
import firebase from '../../firebase'

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};

const requestRegister = () => {
    return {
        type: REGISTER_REQUEST
    };
};

const receiveRegister = user => {
    return {
        type: REGISTER_SUCCESS,
        user
    };
};

const registerError = () => {
    return {
        type: REGISTER_FAILURE
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};

const verifyRequest = () => {
    return {
        type: VERIFY_REQUEST
    };
};

const verifySuccess = () => {
    return {
        type: VERIFY_SUCCESS
    };
};

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log("login user", user);
            dispatch(receiveLogin(user));
        })
        .catch(error => {
            console.log("login error", error);
            dispatch(loginError());
        });
};

export const registerUser = (email, password) => (dispatch) => {
    console.log("reister===>");
    dispatch(requestRegister());
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log("register successs", user);
            dispatch(receiveRegister(user));
        })
        .catch((error) => {
            console.log("register error", error);
            dispatch(registerError());
        });
};

export const logoutUser = () => dispatch => {
    console.log("logout req");
    dispatch(requestLogout());
    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log("logout successs");
            dispatch(receiveLogout());
        })
        .catch(error => {
            console.log("logout error", error);
            dispatch(logoutError());
        });
};

export const verifyAuth = () => dispatch => {
    console.log("verify auth==");
    dispatch(verifyRequest());
    firebase
        .auth()
        .onAuthStateChanged(user => {
            console.log("user==",user);
            if (user !== null) {
                dispatch(receiveLogin(user));
            }
            dispatch(verifySuccess());
        });
};

export const auth = () => {
    firebase.auth().onAuthStateChanged((authenticated) => {
        return !!authenticated
    });
}