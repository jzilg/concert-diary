import { applyMiddleware, compose, createStore } from 'redux'
import middleware from './middleware'
import rootReducer from './reducers/rootReducer'
import applyDevtoolExtension from './applyDevtoolExtension'

const enhancer = compose(
    applyMiddleware(...middleware),
    applyDevtoolExtension(),
)

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default createStore(rootReducer, undefined, enhancer)
