import {
    legacy_createStore as createStore,
    applyMiddleware, combineReducers, compose
} from 'redux'

import thunk from 'redux-thunk'

import moviesReducer from './reducers/movies'
import genresReducer from './reducers/genres'



const reducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer,

})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store