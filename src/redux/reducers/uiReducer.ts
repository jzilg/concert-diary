import Action from '../interfaces/action.interface'
import Notification, { NotificationId } from '../../entities/Notification.interface'
import {
    INCREASE_LOADER_COUNT_ON_STATE,
    DECREASE_LOADER_COUNT_ON_STATE,
    UNSET_NOTIFICATION_ON_STATE,
    SET_NOTIFICATION_ON_STATE,
} from '../actions/core/ui.actions'

export interface UiState {
    loaderCount: number
    notifications: Notification[]
}

interface UiAction extends Action {
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
        case action.type.includes(SET_NOTIFICATION_ON_STATE): {
            return {
                ...state,
                notifications: state.notifications.concat(action.payload.notification),
            }
        }
        case action.type.includes(UNSET_NOTIFICATION_ON_STATE): {
            const notificationIdToRemove = action.payload.notificationId
            const updatedNotifications = state.notifications.filter(notification => (
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
