import { Middleware } from 'redux'
import { isActionOf, getType } from 'typesafe-actions'
import { apiRequest } from '../../actions/core/api.actions'
import { authAsync, setWebtokenOnState } from '../../actions/app/auth.actions'

const authMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(authAsync.request, action)) {
        dispatch(apiRequest({
            url: `${process.env.AUTH_URL}/login`,
            method: 'POST',
            body: JSON.stringify(action.payload),
            successAction: authAsync.success,
            failureAction: authAsync.failure,
        }, getType(authAsync.request)))
    }

    if (isActionOf(authAsync.success, action)) {
        dispatch(setWebtokenOnState(action.payload))
    }

    if (isActionOf(authAsync.failure, action)) {
        dispatch(setWebtokenOnState(null))
    }
}

export default authMiddleware
