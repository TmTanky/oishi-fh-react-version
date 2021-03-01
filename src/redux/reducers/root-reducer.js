import {combineReducers} from 'redux'

import userReducer from './user-reducer'
import cartReducer from './carts-reducers'
import isLoggedInReducer from './islogged-reducer'
import loginErrorReducer from './loginError-reducer'
import registerErrorReducer from './registerError-reducer'

const rootReducer = combineReducers({
    user: userReducer,
    carts: cartReducer,
    isLoggedIn: isLoggedInReducer,
    loginError: loginErrorReducer,
    registerError: registerErrorReducer
})

export default rootReducer