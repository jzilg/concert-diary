import uniqid from 'uniqid'
import {
    UiAction,
    addNotificationToState,
    removeNotificationFromState,
    CREATE_NOTIFICATION,
    DELETE_NOTIFICATION,
} from '../../actions/core/ui.actions'

const uiMiddleware = ({ dispatch }) => next => (action: UiAction) => {
    next(action)

    if (action.type.includes(CREATE_NOTIFICATION)) {
        const id = uniqid()
        const { type, message, duration } = action.payload.notificationOptions
        const notification = {
            id,
            type,
            message,
        }

        dispatch(addNotificationToState(notification, action.meta.feature))

        if (duration) {
            setTimeout(() => {
                dispatch(removeNotificationFromState(id, action.meta.feature))
            }, duration)
        }

        return
    }

    if (action.type.includes(DELETE_NOTIFICATION)) {
        dispatch(removeNotificationFromState(action.payload.notificationId, action.meta.feature))
    }
}

export default uiMiddleware
