import { Middleware } from 'redux'
import notificationsMiddleware from './notificationsMiddleware'
import persistingMiddleware from './persistingMiddleware'

const coreMiddleware: Middleware[] = [
    notificationsMiddleware,
    persistingMiddleware,
]

export default coreMiddleware
