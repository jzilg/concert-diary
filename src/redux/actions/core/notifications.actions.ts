import type { Action } from 'typesafe-actions'
import { createAction } from 'typesafe-actions'
import type { NotificationId, NotificationOptions } from '../../../entities/Notification'
import type Notification from '../../../entities/Notification'

export const createNotification = createAction('CMD / Notification / create')<NotificationOptions, { causedBy: Action }>()

export const addNotificationToState = createAction('DOC / Notification / add to state')<Notification, { causedBy: Action }>()

export const deleteNotification = createAction('CMD / Notification / delete')<NotificationId, { causedBy: Action }>()

export const removeNotificationFromState = createAction('DOC / Notification / remove from state')<NotificationId, { causedBy: Action }>()
