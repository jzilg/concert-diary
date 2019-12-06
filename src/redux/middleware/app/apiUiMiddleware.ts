import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import { apiRequest, apiSuccess, apiFailure } from '../../actions/core/api.actions'
import { NotificationOptions } from '../../../entities/Notification'
import { increaseLoaderCount, decreaseLoaderCount, createNotification } from '../../actions/core/ui.actions'

const apiUiMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(apiRequest, action)) {
        dispatch(increaseLoaderCount(undefined, action.meta.causedBy))
    }

    if (isActionOf(apiSuccess, action)) {
        dispatch(decreaseLoaderCount(undefined, action.meta.causedBy))
    }

    if (isActionOf(apiFailure, action)) {
        dispatch(decreaseLoaderCount(undefined, action.meta.causedBy))

        const notificationOptions: NotificationOptions = {
            type: 'error',
            message: 'Error occured',
        }

        dispatch(createNotification(notificationOptions, action.meta.causedBy))
    }
}

export default apiUiMiddleware
