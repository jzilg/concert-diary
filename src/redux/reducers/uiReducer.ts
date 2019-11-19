import Action from '../types/Action'
import Notification, { NotificationId } from '../../entities/Notification'
import {
    INCREASE_LOADER_COUNT_ON_STATE,
    DECREASE_LOADER_COUNT_ON_STATE,
    ADD_NOTIFICATION_TO_STATE,
    REMOVE_NOTIFICATION_FROM_STATE,
} from '../actions/core/ui.actions'

export type UiState = {
    loaderCount: number
    notifications: Notification[]
}

type UiAction = Action & {
    payload: {
        value?: boolean
        notification?: Notification
        notificationId?: NotificationId
    }
}

export const defaultState: UiState = {
    loaderCount: 0,
    notifications: [],
}

function uiReducer(state = defaultState, action: UiAction): UiState {
    switch (true) {
        case action.type.includes(INCREASE_LOADER_COUNT_ON_STATE): {
            return {
                ...state,
                loaderCount: state.loaderCount + 1,
            }
        }
        case action.type.includes(DECREASE_LOADER_COUNT_ON_STATE): {
            return {
                ...state,
                loaderCount: state.loaderCount - 1,
            }
        }
        case action.type.includes(ADD_NOTIFICATION_TO_STATE): {
            return {
                ...state,
                notifications: state.notifications.concat(action.payload.notification),
            }
        }
        case action.type.includes(REMOVE_NOTIFICATION_FROM_STATE): {
            const notificationIdToRemove = action.payload.notificationId
            const updatedNotifications = state.notifications.filter((notification) => (
                notification.id !== notificationIdToRemove
            ))
            return {
                ...state,
                notifications: updatedNotifications,
            }
        }
        default: {
            return state
        }
    }
}

export default uiReducer
