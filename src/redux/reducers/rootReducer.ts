import { combineReducers } from 'redux'
import concertsReducer from './concertsReducer'

const rootReducer = combineReducers({
    concerts: concertsReducer,
})

export default rootReducer
