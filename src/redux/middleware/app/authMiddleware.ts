import { Middleware } from 'redux'
import { isActionOf, getType } from 'typesafe-actions'
import { push } from 'connected-react-router'
import { apiRequest, apiFailure } from '../../actions/core/api.actions'
import { authAsync, setWebtokenOnState } from '../../actions/app/auth.actions'
import routeIsLoginSelector from '../../selectors/routeIsLoginSelector'

const authMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store
    const state = getState()
    const routeIsLogin = routeIsLoginSelector(state)

    if (isActionOf(apiFailure, action)) {
        const { error } = action.payload

        if (error.status === 401 && !routeIsLogin) {
            dispatch(push('/login'))
        }
    }

    if (isActionOf(authAsync.request, action)) {
        dispatch(apiRequest({
            url: `${process.env.AUTH_URL}/login`,
            method: 'POST',
            body: JSON.stringify(action.payload),
            successAction: authAsync.success,
            failureAction: authAsync.failure,
        }, {
            causedBy: getType(authAsync.request),
        }))
    }

    if (isActionOf(authAsync.success, action)) {
        dispatch(setWebtokenOnState(action.payload))
        dispatch(push('/'))
    }

    if (isActionOf(authAsync.failure, action)) {
        dispatch(setWebtokenOnState(''))
    }
}

export default authMiddleware
