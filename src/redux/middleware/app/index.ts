import { Middleware } from 'redux'
import apiUiMiddleware from './apiUiMiddleware'
import authMiddleware from './authMiddleware'
import concertsMiddleware from './concertsMiddleware'
import festivalsMiddleware from './festivalsMiddleware'
import statisticsMiddleware from './statisticsMiddleware'
import pageMiddleware from './pageMiddleware'
import apiHandler from '../../apiHandler'

const appMiddleware: Middleware[] = [
    pageMiddleware,
    apiUiMiddleware,
    authMiddleware(apiHandler),
    concertsMiddleware(apiHandler),
    festivalsMiddleware(apiHandler),
    statisticsMiddleware,
]

export default appMiddleware
