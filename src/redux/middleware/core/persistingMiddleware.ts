import { Middleware } from 'redux'
import { setStorageData } from '../../../sessionStorage'

const persistingMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)

    setStorageData('redux-store', store.getState())
}

export default persistingMiddleware
