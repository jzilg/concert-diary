import { applyMiddleware, compose, createStore } from 'redux'
import middleware from './middleware'
import rootReducer from './reducers/rootReducer'
import applyDevtoolExtension from './applyDevtoolExtension'

const enhancer = compose(
    applyMiddleware(...middleware),
    applyDevtoolExtension(),
)

export default createStore(rootReducer, undefined, enhancer)
