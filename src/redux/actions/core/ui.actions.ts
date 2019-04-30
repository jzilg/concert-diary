import Action from '../../interfaces/action.interface'
import Notification, { NotificationId } from '../../../entities/Notification.interface'

export const SET_LOADER_ON_STATE = 'SET_LOADER_ON_STATE'
export const SET_NOTIFICATION_ON_STATE = 'SET_NOTIFICATION_ON_STATE'
export const UNSET_NOTIFICATION_ON_STATE = 'UNSET_NOTIFICATION_ON_STATE'

export const setLoader = (value: boolean, triggeredBy): Action => ({
    type: SET_LOADER_ON_STATE,
    payload: {
        value,
    },
    meta: {
        triggeredBy,
    },
})

export const setNotification = (notification: Notification, triggeredBy: string): Action => ({
    type: SET_NOTIFICATION_ON_STATE,
    payload: {
        notification,
    },
    meta: {
        triggeredBy,
    },
})

export const unsetNotification = (notificationId: NotificationId, triggeredBy: string): Action => ({
    type: UNSET_NOTIFICATION_ON_STATE,
    payload: {
        notificationId,
    },
    meta: {
        triggeredBy,
    },
})
