import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user-reducer'
import cartReducer from './carts-reducers'
import isLoggedInReducer from './islogged-reducer'
import loginErrorReducer from './loginError-reducer'
import registerErrorReducer from './registerError-reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['carts', 'user', 'isLoggedIn']
}

const rootReducer = combineReducers({
    user: userReducer,
    carts: cartReducer,
    isLoggedIn: isLoggedInReducer,
    loginError: loginErrorReducer,
    registerError: registerErrorReducer
})

export default persistReducer(persistConfig, rootReducer)