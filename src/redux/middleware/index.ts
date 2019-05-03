import { routerMiddleware } from 'connected-react-router'
import history from '../../history'
import coreMiddleware from './core'
import appMiddleware from './app'

export default [
    routerMiddleware(history),
    ...appMiddleware,
    ...coreMiddleware,
]
