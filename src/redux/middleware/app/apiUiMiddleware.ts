import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import { apiRequest, apiSuccess, apiFailure } from '../../actions/core/api.actions'
import { NotificationOptions } from '../../../entities/Notification'
import { increaseLoaderCount, decreaseLoaderCount } from '../../actions/core/loadingCount.actions'
import { createNotification } from '../../actions/core/notifications.actions'

const apiUiMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(apiRequest, action)) {
        const { causedBy } = action.meta
        dispatch(increaseLoaderCount(undefined, { causedBy }))
    }

    if (isActionOf(apiSuccess, action)) {
        const { causedBy } = action.meta
        dispatch(decreaseLoaderCount(undefined, { causedBy }))
    }

    if (isActionOf(apiFailure, action)) {
        const { causedBy } = action.meta

        dispatch(decreaseLoaderCount(undefined, { causedBy }))

        const notificationOptions: NotificationOptions = {
            type: 'error',
            message: action.payload.error.message,
        }

        dispatch(createNotification(notificationOptions, { causedBy }))
    }
}

export default apiUiMiddleware
