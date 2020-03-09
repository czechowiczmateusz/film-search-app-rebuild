const initState = {
    authError: null,
    API_KEY: 'dc10a74e3b456f7ea1ca583b9da65d68'
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            return state
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            return {
                ...state,
                authError: action.err
            }
        default:
            return state;
    }
}

export default authReducer