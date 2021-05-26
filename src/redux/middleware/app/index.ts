import { Middleware } from 'redux'
import apiUiMiddleware from './apiUiMiddleware'
import authMiddleware from './authMiddleware'
import concertsMiddleware from './concertsMiddleware'
import festivalsMiddleware from './festivalsMiddleware'
import statisticsMiddleware from './statisticsMiddleware'
import pageMiddleware from './pageMiddleware'
import apiHandler from '../../apiHandler'
import api from '../../../api'

const appMiddleware: Middleware[] = [
    pageMiddleware,
    apiUiMiddleware,
    authMiddleware(api, apiHandler),
    concertsMiddleware(api, apiHandler, window.confirm),
    festivalsMiddleware(api, apiHandler, window.confirm),
    statisticsMiddleware(api, apiHandler),
]

export default appMiddleware
