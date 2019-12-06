import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import uniqid from 'uniqid'
import {
    createNotification,
    addNotificationToState,
    deleteNotification,
    removeNotificationFromState,
} from '../../actions/core/notifications.actions'

const uiMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(createNotification, action)) {
        const id = uniqid()
        const { type, message, duration } = action.payload
        const causedBy = action.meta
        const notification = {
            id,
            type,
            message,
        }

        dispatch(addNotificationToState(notification, causedBy))

        if (duration) {
            setTimeout(() => {
                dispatch(removeNotificationFromState(id, causedBy))
            }, duration)
        }

        return
    }

    if (isActionOf(deleteNotification, action)) {
        const notificationId = action.payload
        const causedBy = action.meta

        dispatch(removeNotificationFromState(notificationId, causedBy))
    }
}

export default uiMiddleware
