export const signIn = ({ email, password }) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.login({ 
            email, 
            password
        }).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.logout().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp = ({ email, password, firstName, lastName, username }) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.createUser({ email, password }, { firstName, lastName, username, email }).then(() => {
            let user = firebase.auth().currentUser;
            user && user.sendEmailVerification().then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS'})
            }).catch(err => {
                dispatch({ type: 'SIGNUP_ERROR', err})
            })
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        })
    }
}
