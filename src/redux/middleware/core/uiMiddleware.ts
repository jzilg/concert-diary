import uniqid from 'uniqid'
import MiddlewareCreator from '../../interfaces/middleware-creator.interface'
import { NotificationType, NotificationMessage, NotificationDuration } from '../../../entities/Notification.interface'
import Action from '../../interfaces/action.interface'
import { setLoader, setNotification, unsetNotification } from '../../actions/core/ui.actions'

interface NotificationOptions {
    type: NotificationType
    message: NotificationMessage
    duration?: NotificationDuration
}

export interface UiOptions {
    showLoader?: boolean
    notification?: NotificationOptions
}

const uiMiddleware = ({ dispatch }): MiddlewareCreator => next => (action: Action) => {
    next(action)

    if (!action.meta || !action.meta.ui) {
        return
    }

    if (action.meta.ui.showLoader !== undefined) {
        dispatch(setLoader(action.meta.ui.showLoader, action.feature))
    }

    if (action.meta.ui.notification) {
        const id = uniqid()
        const notification = {
            id,
            ...action.meta.ui.notification,
        }

        dispatch(setNotification(notification, action.feature))

        const { duration } = action.meta.ui.notification
        if (duration) {
            setTimeout(() => {
                dispatch(unsetNotification(id, action.feature))
            }, duration)
        }
    }
}

export default uiMiddleware
