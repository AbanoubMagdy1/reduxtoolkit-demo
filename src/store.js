import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, {}, middlewareEnhancer)

export default store
