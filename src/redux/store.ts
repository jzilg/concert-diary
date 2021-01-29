import {
    applyMiddleware,
    compose,
    createStore,
    Store,
} from 'redux'
import middleware from './middleware'
import rootReducer from './reducers/rootReducer'
import applyDevtoolExtension from './applyDevtoolExtension'
import { getStorageData } from '../sessionStorage'

const enhancer = compose(
    applyMiddleware(...middleware),
    applyDevtoolExtension(),
)

const persistedState = getStorageData('redux-store') as Store

export default createStore(rootReducer, persistedState, enhancer)
