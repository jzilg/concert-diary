import { createAction } from 'typesafe-actions'
import Notification, { NotificationId, NotificationOptions } from '../../../entities/Notification'

export const createNotification = createAction('CMD / Notification / create')<NotificationOptions, { causedBy: string }>()

export const addNotificationToState = createAction('DOC / Notification / add to state')<Notification, { causedBy: string }>()

export const deleteNotification = createAction('CMD / Notification / delete')<NotificationId, { causedBy: string }>()

export const removeNotificationFromState = createAction('DOC / Notification / remove from state')<NotificationId, { causedBy: string }>()
