import MiddlewareCreator from '../../interfaces/middleware-creator.interface'
import { NotificationType, NotificationMessage, NotificationDuration } from '../../../entities/Notification.interface'
import Action from '../../interfaces/action.interface'
import { setLoader, setNotification, unsetNotification } from '../../actions/core/ui.actions'
import createUniqueId from '../../../utils/createUniqueId'

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
        dispatch(setLoader(action.meta.ui.showLoader, action.type))
    }

    if (action.meta.ui.notification) {
        const id = createUniqueId()
        const notification = {
            id,
            ...action.meta.ui.notification,
        }

        dispatch(setNotification(notification, action.type))

        const { duration } = action.meta.ui.notification
        if (duration) {
            setTimeout(() => {
                dispatch(unsetNotification(id, action.type))
            }, duration)
        }
    }
}

export default uiMiddleware
