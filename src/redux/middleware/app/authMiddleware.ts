import { Middleware } from 'redux'
import { isActionOf, getType } from 'typesafe-actions'
import { push } from 'connected-react-router'
import { apiRequest, apiFailure } from '../../actions/core/api.actions'
import authAsync from '../../actions/app/auth.actions'
import routeIsLoginSelector from '../../selectors/routeIsLoginSelector'
import { setApiToken } from '../../../api'

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
            url: `${process.env.API_URL}/login`,
            method: 'POST',
            body: JSON.stringify(action.payload),
            successAction: authAsync.success,
            failureAction: authAsync.failure,
        }, {
            causedBy: getType(authAsync.request),
        }))
    }

    if (isActionOf(authAsync.success, action)) {
        setApiToken(action.payload)
        dispatch(push('/'))
    }
}

export default authMiddleware
