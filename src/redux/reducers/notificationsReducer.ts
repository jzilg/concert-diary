import { createReducer } from 'typesafe-actions'
import type Notification from '../../entities/Notification'
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

        return state.filter((notification) => (
            notification.id !== notificationIdToRemove
        ))
    })

export default notificationsReducer
