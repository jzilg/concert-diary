import { createReducer } from 'typesafe-actions'
import Notification from '../../entities/Notification'
import { addNotificationToState, removeNotificationFromState } from '../actions/core/notifications.actions'

export type NotificationsState = Notification[]

export const defaultState: NotificationsState = []

const notificationsReducer = createReducer(defaultState)
    .handleAction(addNotificationToState, (state, action) => {
        const notification = action.payload

        return state.concat(notification)
    })
    .handleAction(removeNotificationFromState, (state, action) => {
        const notificationIdToRemove = action.payload
        const updatedNotifications = state.filter((notification) => (
            notification.id !== notificationIdToRemove
        ))

        return updatedNotifications
    })

export default notificationsReducer
