import { createAction } from 'typesafe-actions'
import Notification, { NotificationId, NotificationOptions } from '../../../entities/Notification'

export const createNotification = createAction('CMD / Notification / CREATE')<NotificationOptions, { causedBy: string }>()

export const addNotificationToState = createAction('DOC / Notification / ADD_TO_STATE')<Notification, { causedBy: string }>()

export const deleteNotification = createAction('CMD / Notification / DELETE')<NotificationId, { causedBy: string }>()

export const removeNotificationFromState = createAction('DOC / Notification / REMOVE_FROM_STATE')<NotificationId, { causedBy: string }>()
