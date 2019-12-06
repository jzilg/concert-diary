import { createAction } from 'typesafe-actions'
import Notification, { NotificationId, NotificationOptions } from '../../../entities/Notification'

export const createNotification = createAction('[Notifications] [CMD] CREATE')<NotificationOptions, string>()

export const addNotificationToState = createAction('[Notifications] [DOC] ADD_TO_STATE')<Notification, string>()

export const deleteNotification = createAction('[Notifications] [CMD] DELETE')<NotificationId, string>()

export const removeNotificationFromState = createAction('[Notifications] [DOC] REMOVE_FROM_STATE')<NotificationId, string>()
