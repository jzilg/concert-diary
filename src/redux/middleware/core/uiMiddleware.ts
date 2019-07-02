import uniqid from 'uniqid'
import Action from '../../interfaces/action.interface'
import {
    NotificationType,
    NotificationMessage,
    NotificationDuration,
    NotificationId,
} from '../../../entities/Notification.interface'
import {
    increaseLoaderCount,
    addNotificationToState,
    removeNotificationFromState,
    DELETE_NOTIFICATION,
} from '../../actions/core/ui.actions'

interface NotificationOptions {
    type: NotificationType
    message: NotificationMessage
    duration?: NotificationDuration
}

export interface UiOptions {
    showLoader?: boolean
    notification?: NotificationOptions
}

interface UiAction extends Action {
    payload: {
        notification?: Notification
        notificationId?: NotificationId
    }
}

const uiMiddleware = ({ dispatch }) => next => (action: UiAction) => {
    next(action)

    if (action.type.includes(DELETE_NOTIFICATION)) {
        dispatch(removeNotificationFromState(action.payload.notificationId, action.meta.feature))
    }

    if (!action.meta || !action.meta.ui) {
        return
    }

    if (action.meta.ui.showLoader !== undefined) {
        dispatch(increaseLoaderCount(action.meta.feature))
    }

    if (action.meta.ui.notification) {
        const id = uniqid()
        const notification = {
            id,
            ...action.meta.ui.notification,
        }

        dispatch(addNotificationToState(notification, action.meta.feature))

        const { duration } = action.meta.ui.notification
        if (duration) {
            setTimeout(() => {
                dispatch(removeNotificationFromState(id, action.meta.feature))
            }, duration)
        }
    }
}

export default uiMiddleware
