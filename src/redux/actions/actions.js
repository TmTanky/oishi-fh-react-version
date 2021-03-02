export const loginOnError = (item) => {
    return {
        type: 'LOGIN_ERROR',
        payload: item
    }
}

export const loginClearError = () => {
    return {
        type: 'LOGIN_CLEAR_ERROR'
    }
}

export const registerOnError = (item) => {
    return {
        type: 'REGISTER_ERROR',
        payload: item
    }
}

export const registerClearError = () => {
    return {
        type: 'REGISTER_CLEAR_ERROR'
    }
}

export const loggedIn = () => {
    return {
        type: 'LOGGED_IN'
    }
}

export const successLoggedIn = (item) => {
    return {
        type: 'SUCCESS_LOGIN',
        payload: item
    }
}

export const logoutUser = () => {
    return {
        type: `LOGOUT_USER`
    }
}