import { Middleware } from 'redux'
import { ApiHandler } from './apiHandler'

type ApiMiddleware = (apiHandler: ApiHandler) => Middleware

export default ApiMiddleware
