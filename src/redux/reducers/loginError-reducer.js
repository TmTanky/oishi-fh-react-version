const INITIAL_STATE = {
    error: []
}

const loginErrorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                error: [action.payload]
            }
        case 'LOGIN_CLEAR_ERROR':
            return {
                ...state,
                error: []
            }    
        default: 
            return state    
    }
}

export default loginErrorReducer