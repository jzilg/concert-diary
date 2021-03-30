import { isActionOf } from 'typesafe-actions'
import { push } from 'connected-react-router'
import ApiMiddleware from '../../ApiMiddleware'
import {
    login,
    logout,
    authAsync,
    setApiTokenOnState,
    resetApiTokenState,
    register,
    registerAsync,
} from '../../actions/app/auth.actions'
import { getLoginOptions, getRegisterOptions } from '../../../api/api'
import { createNotification } from '../../actions/core/notifications.actions'

const authMiddleware: ApiMiddleware = (apiHandler) => (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(login, action)) {
        apiHandler({
            options: getLoginOptions(action.payload),
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
            message: 'Wrong Username or Password',
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
            options: getRegisterOptions(action.payload),
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
}

export default authMiddleware
