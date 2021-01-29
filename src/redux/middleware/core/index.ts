import apiMiddleware from './apiMiddleware'
import uiMiddleware from './notificationsMiddleware'
import persistingMiddleware from './persistingMiddleware'

export default [
    apiMiddleware,
    uiMiddleware,
    persistingMiddleware,
]
