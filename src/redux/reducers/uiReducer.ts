import Action from '../interfaces/action.interface'
import Notification, { NotificationId } from '../../entities/Notification.interface'
import { UNSET_NOTIFICATION_ON_STATE, SET_LOADER_ON_STATE, SET_NOTIFICATION_ON_STATE } from '../actions/core/ui.actions'

export interface UiState {
    numOfLoadingRequests: number
    isLoading: boolean
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
    numOfLoadingRequests: 0,
    isLoading: false,
    notifications: [],
}

function uiReducer(state = defaultState, action: UiAction): UiState {
    switch (action.type) {
        case SET_LOADER_ON_STATE: {
            const { value } = action.payload
            const { numOfLoadingRequests } = state
            const newNumOfLoadingRequests = value === false
                ? numOfLoadingRequests - 1
                : numOfLoadingRequests + 1

            return {
                ...state,
                numOfLoadingRequests: newNumOfLoadingRequests,
                isLoading: newNumOfLoadingRequests > 0,
            }
        }
        case SET_NOTIFICATION_ON_STATE: {
            return {
                ...state,
                notifications: state.notifications.concat(action.payload.notification),
            }
        }
        case UNSET_NOTIFICATION_ON_STATE: {
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
