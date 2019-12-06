import { createAction } from 'typesafe-actions'
import Notification, { NotificationId, NotificationOptions } from '../../../entities/Notification'

export const increaseLoaderCount = createAction('[DOC] INCREASE_LOADER_COUNT_ON_STATE')<undefined, string>()

export const decreaseLoaderCount = createAction('[DOC] DECREASE_LOADER_COUNT_ON_STATE')<undefined, string>()

export const deleteNotification = createAction('[CMD] DELETE_NOTIFICATION')<NotificationId, string>()

export const createNotification = createAction('[CMD] CREATE_NOTIFICATION')<NotificationOptions, string>()

export const addNotificationToState = createAction('[DOC] ADD_NOTIFICATION_TO_STATE')<Notification, string>()

export const removeNotificationFromState = createAction('[DOC] ADD_NOTIFICATION_TO_STATE')<NotificationId, string>()
