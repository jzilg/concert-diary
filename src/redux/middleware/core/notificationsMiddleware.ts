import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import {
    createNotification,
    addNotificationToState,
    deleteNotification,
    removeNotificationFromState,
} from '../../actions/core/notifications.actions'
import notificationsSelector from '../../selectors/notificationsSelector'

const uiMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

    if (isActionOf(createNotification, action)) {
        const { type, message, duration } = action.payload
        const id = `${type}-${message}`
        const notifications = notificationsSelector(getState())
        const notificationAlreadyExists = notifications.some((notification) => (
            notification.id === id
        ))

        if (notificationAlreadyExists) {
            return
        }

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
