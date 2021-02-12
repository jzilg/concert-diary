import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import { push } from 'connected-react-router'
import { apiRequest, apiFailure } from '../../actions/core/api.actions'
import {
    authAsync,
    logout,
    resetApiTokenState,
    setApiTokenOnState,
} from '../../actions/app/auth.actions'
import routeIsLoginSelector from '../../selectors/routeIsLoginSelector'
import { getAuthApiUrl } from '../../../api'
import { createNotification } from '../../actions/core/notifications.actions'

const authMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

    if (isActionOf(apiFailure, action)) {
        const { error } = action.payload
        const state = getState()
        const routeIsLogin = routeIsLoginSelector(state)

        if (error.status === 401) {
            if (routeIsLogin) {
                dispatch(createNotification({
                    type: 'error',
                    message: 'Wrong Username or Password',
                }, {
                    causedBy: action.meta.causedBy,
                }))
            } else {
                dispatch(createNotification({
                    type: 'error',
                    message: 'Session expired',
                }, {
                    causedBy: action.meta.causedBy,
                }))

                dispatch(push('/login'))
            }
        }
    }

    if (isActionOf(authAsync.request, action)) {
        dispatch(apiRequest({
            url: getAuthApiUrl(),
            method: 'POST',
            body: JSON.stringify(action.payload),
            successAction: authAsync.success,
            failureAction: authAsync.failure,
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(authAsync.success, action)) {
        dispatch(setApiTokenOnState(action.payload))
        dispatch(push('/'))
    }

    if (isActionOf(logout, action)) {
        dispatch(resetApiTokenState())
        dispatch(push('/login'))
        dispatch(createNotification({
            type: 'success',
            message: 'Successfully logged out',
        }, {
            causedBy: action,
        }))
    }
}

export default authMiddleware
