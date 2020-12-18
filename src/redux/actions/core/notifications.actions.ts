import { Action, createAction } from 'typesafe-actions'
import Notification, { NotificationId, NotificationOptions } from '../../../entities/Notification'

export const createNotification = createAction('CMD / Notification / create')<NotificationOptions, { causedBy: Action }>()

export const addNotificationToState = createAction('DOC / Notification / add to state')<Notification, { causedBy: Action }>()

export const deleteNotification = createAction('CMD / Notification / delete')<NotificationId, { causedBy: Action }>()

export const removeNotificationFromState = createAction('DOC / Notification / remove from state')<NotificationId, { causedBy: Action }>()
