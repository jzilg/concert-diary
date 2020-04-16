import { createAction } from 'typesafe-actions'
import Notification, { NotificationId, NotificationOptions } from '../../../entities/Notification'

export const createNotification = createAction('Notification | CMD | CREATE')<NotificationOptions, { causedBy: string }>()

export const addNotificationToState = createAction('Notification | DOC | ADD_TO_STATE')<Notification, { causedBy: string }>()

export const deleteNotification = createAction('Notification | CMD | DELETE')<NotificationId, { causedBy: string }>()

export const removeNotificationFromState = createAction('Notification | DOC | REMOVE_FROM_STATE')<NotificationId, { causedBy: string }>()
