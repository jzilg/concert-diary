import { Middleware } from 'redux'
import apiUiMiddleware from './apiUiMiddleware'
import authMiddleware from './authMiddleware'
import concertsMiddleware from './concertsMiddleware'
import festivalsMiddleware from './festivalsMiddleware'
import statisticsMiddleware from './statisticsMiddleware'
import pageMiddleware from './pageMiddleware'

const appMiddleware: Middleware[] = [
    pageMiddleware,
    apiUiMiddleware,
    authMiddleware,
    concertsMiddleware,
    festivalsMiddleware,
    statisticsMiddleware,
]

export default appMiddleware
