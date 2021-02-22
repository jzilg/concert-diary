import { routerMiddleware } from 'connected-react-router'
import { Middleware } from 'redux'
import history from '../../history'
import coreMiddleware from './core'
import appMiddleware from './app'

const middleware: Middleware[] = [
    routerMiddleware(history),
    ...coreMiddleware,
    ...appMiddleware,
]

export default middleware
