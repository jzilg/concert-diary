import apiUiMiddleware from './apiUiMiddleware'
import authMiddleware from './authMiddleware'
import concertsMiddleware from './concertsMiddleware'
import festivalsMiddleware from './festivalsMiddleware'
import statisticsMiddleware from './statisticsMiddleware'
import pageMiddleware from './pageMiddleware'

export default [
    pageMiddleware,
    apiUiMiddleware,
    authMiddleware,
    concertsMiddleware,
    festivalsMiddleware,
    statisticsMiddleware,
]
