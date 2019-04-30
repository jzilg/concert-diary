import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../../history'
import concertsReducer from './concertsReducer'
import festivalsReducer from './festivalsReducer'
import uiReducer from './uiReducer'

const rootReducer: Reducer = combineReducers({
    router: connectRouter(history),
    concerts: concertsReducer,
    festivals: festivalsReducer,
    ui: uiReducer,
})

export default rootReducer
