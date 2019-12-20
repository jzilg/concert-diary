import { createAction } from 'typesafe-actions'
import Notification, { NotificationId, NotificationOptions } from '../../../entities/Notification'

export const createNotification = createAction('[Notifications] [CMD] CREATE')<NotificationOptions, { causedBy: string }>()

export const addNotificationToState = createAction('[Notifications] [DOC] ADD_TO_STATE')<Notification, { causedBy: string }>()

export const deleteNotification = createAction('[Notifications] [CMD] DELETE')<NotificationId, { causedBy: string }>()

export const removeNotificationFromState = createAction('[Notifications] [DOC] REMOVE_FROM_STATE')<NotificationId, { causedBy: string }>()
