import { routerMiddleware } from 'connected-react-router'
import history from '../../history'
import coreMiddleware from './core'

export default [
    routerMiddleware(history),
    ...coreMiddleware,
]
