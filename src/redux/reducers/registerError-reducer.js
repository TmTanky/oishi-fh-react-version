const INITIAL_STATE = {
    error: []
}

const registerErrorReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'REGISTER_ERROR':
            return {
                ...state,
                error: [action.payload]
            }
        case 'REGISTER_CLEAR_ERROR':
            return {
                ...state,
                error: []
            }    
        default: 
            return state    
    }
}

export default registerErrorReducer