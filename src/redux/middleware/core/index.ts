import { Middleware } from 'redux'
import apiMiddleware from './apiMiddleware'
import notificationsMiddleware from './notificationsMiddleware'
import persistingMiddleware from './persistingMiddleware'

const coreMiddleware: Middleware[] = [
    apiMiddleware(fetch),
    notificationsMiddleware,
    persistingMiddleware,
]

export default coreMiddleware
