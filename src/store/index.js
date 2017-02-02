import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "../reducers"
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const middleware = applyMiddleware(promise(), thunk, logger())

const store = createStore(reducer, persistedState, middleware)

store.subscribe(() => {
  saveState(store.getState())
})

export default store