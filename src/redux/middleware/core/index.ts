import apiMiddleware from './apiMiddleware'
import notificationsMiddleware from './notificationsMiddleware'
import persistingMiddleware from './persistingMiddleware'

export default [
    apiMiddleware,
    notificationsMiddleware,
    persistingMiddleware,
]
