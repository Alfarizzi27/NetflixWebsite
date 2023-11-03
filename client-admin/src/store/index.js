import {
    legacy_createStore as createStore,
    applyMiddleware, combineReducers, compose
} from 'redux'

import thunk from 'redux-thunk'

import moviesReducer from './reducers/movies'
import genresReducer from './reducers/genres'
import modalReducer from './reducers/modal'
import usersReducer from './reducers/users'


const reducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    modal: modalReducer,
    user: usersReducer

})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store