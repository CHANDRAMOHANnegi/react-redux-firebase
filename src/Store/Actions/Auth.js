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
            var rootRef = firebase.database().ref("users/")//.child("users");
            rootRef.orderByChild("email").equalTo(email).on("child_added", (snap) => {
                dispatch(receiveLogin(snap.val().name));
            })
        })
        .catch(error => {
            dispatch(loginError());
        });
};

export const registerUser = (name, email, password) => (dispatch) => {
    dispatch(requestRegister());
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            dispatch(receiveRegister({ email, password }));
            var rootRef = firebase.database().ref("users")
            rootRef.push({
                name: name,
                email: email
            })
        })
        .catch((error) => {
            dispatch(registerError());
        });
};

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    firebase
        .auth()
        .signOut()
        .then(() => {
            dispatch(receiveLogout());
        })
        .catch(error => {
            dispatch(logoutError());
        });
};

export const verifyAuth = () => dispatch => {
    dispatch(verifyRequest());
    firebase
        .auth()
        .onAuthStateChanged(user => {
            if (user !== null) {
                var rootRef = firebase.database().ref("users/")//.child("users");
                rootRef.orderByChild("email").equalTo(user.email).on("child_added", (snap) => {
                    dispatch(receiveLogin(snap.val().name));
                })
            }
            dispatch(verifySuccess());
        });
};

export const auth = () => {
    firebase.auth().onAuthStateChanged((authenticated) => {
        return !!authenticated
    });
}

