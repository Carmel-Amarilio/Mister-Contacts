const { createStore, compose, combineReducers } = Redux

import { contactReducer } from './reducers/contact.reducer.js'

const rootReducer = combineReducers({
    contactModule: contactReducer,
})


const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() ////// ||compose()
export const store = createStore(rootReducer, middleware)
window.gStore = store
