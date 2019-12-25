import { combineReducers, Reducer } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../../history'
import concertsReducer from './concertsReducer'
import festivalsReducer from './festivalsReducer'
import loadingCountReducer from './loadingCountReducer'
import notificationsReducer from './notificationsReducer'

const rootReducer: Reducer = combineReducers({
    router: connectRouter(history),
    concerts: concertsReducer,
    festivals: festivalsReducer,
    loadingCount: loadingCountReducer,
    notifications: notificationsReducer,
})

export default rootReducer
