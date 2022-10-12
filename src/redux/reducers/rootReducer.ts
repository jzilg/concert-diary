import type { Reducer } from 'redux'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from '../../history'
import concertsReducer from './concertsReducer'
import festivalsReducer from './festivalsReducer'
import loadingCountReducer from './loadingCountReducer'
import notificationsReducer from './notificationsReducer'
import statisticsReducer from './statisticsReducer'
import authReducer from './authReducer'
import pageReducer from './pageReducer'

const rootReducer: Reducer = combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    concerts: concertsReducer,
    festivals: festivalsReducer,
    loadingCount: loadingCountReducer,
    notifications: notificationsReducer,
    page: pageReducer,
    statistics: statisticsReducer,
})

export type State = ReturnType<typeof rootReducer>

export default rootReducer
