const INITIAL_STATE = {
    carts: []
} 

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADDITEM': 
            return state
        default:
            return state
    }
}

export default cartReducer