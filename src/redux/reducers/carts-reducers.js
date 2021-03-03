import {addItemtoCart, removeItemtoCart} from '../../utils/carts-utils'

const INITIAL_STATE = {
    carts: []
} 

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_ITEM': 
            return {
                ...state,
                carts: addItemtoCart(state.carts, action.payload)
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                carts: removeItemtoCart(state.carts, action.payload)
            }
        case 'LOGOUT_CLEAR_CARTS':
            return {
                carts: []
            }        
        default:
            return state
    }
}

export default cartReducer