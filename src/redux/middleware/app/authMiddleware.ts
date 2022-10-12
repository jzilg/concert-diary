import { isActionOf } from 'typesafe-actions'
import { push } from 'connected-react-router'
import type { Middleware } from 'redux'
import type { ApiHandler } from '../../apiHandler'
import type { Api } from '../../../api'
import {
    login,
    logout,
    authAsync,
    setApiTokenOnState,
    resetApiTokenState,
    register,
    registerAsync,
} from '../../actions/app/auth.actions'
import { createNotification } from '../../actions/core/notifications.actions'

// eslint-disable-next-line max-len
const authMiddleware = (api: Api, apiHandler: ApiHandler): Middleware => (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(login, action)) {
        apiHandler({
            options: api.getLoginOptions(action.payload),
            asyncActions: authAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(authAsync.success, action)) {
        dispatch(setApiTokenOnState(action.payload))
        dispatch(push('/'))
    }

    if (isActionOf(authAsync.failure, action)) {
        dispatch(createNotification({
            type: 'error',
            message: 'Wrong username or password',
        }, {
            causedBy: action,
        }))
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

    if (isActionOf(register, action)) {
        apiHandler({
            options: api.getRegisterOptions(action.payload),
            asyncActions: registerAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(registerAsync.success, action)) {
        dispatch(push('/login'))
        dispatch(createNotification({
            type: 'success',
            message: 'Registration success. Please login now.',
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(registerAsync.failure, action)) {
        dispatch(createNotification({
            type: 'error',
            message: 'Wrong register token',
        }, {
            causedBy: action,
        }))
    }
}

export default authMiddleware
