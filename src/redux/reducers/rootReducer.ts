import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../../history'
import concertsReducer from './concertsReducer'

const rootReducer: Reducer = combineReducers({
    router: connectRouter(history),
    concerts: concertsReducer,
})

export default rootReducer
