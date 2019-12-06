import { createReducer } from 'typesafe-actions'
import Notification from '../../entities/Notification'
import {
    increaseLoaderCount,
    decreaseLoaderCount,
    addNotificationToState,
    removeNotificationFromState,
} from '../actions/core/ui.actions'

export type UiState = {
    loaderCount: number
    notifications: Notification[]
}

export const defaultState: UiState = {
    loaderCount: 0,
    notifications: [],
}

const uiReducer = createReducer(defaultState)
    .handleAction(increaseLoaderCount, (state) => ({
        ...state,
        loaderCount: state.loaderCount + 1,
    }))
    .handleAction(decreaseLoaderCount, (state) => ({
        ...state,
        loaderCount: state.loaderCount - 1,
    }))
    .handleAction(addNotificationToState, (state, action) => {
        const notification = action.payload
        console.log('%cnotification:', 'color: #d83', notification)
        return {
            ...state,
            notifications: state.notifications.concat(notification),
        }
    })
    .handleAction(removeNotificationFromState, (state, action) => {
        const notificationIdToRemove = action.payload.notificationId
        const updatedNotifications = state.notifications.filter((notification) => (
            notification.id !== notificationIdToRemove
        ))

        return {
            ...state,
            notifications: updatedNotifications,
        }
    })

export default uiReducer
