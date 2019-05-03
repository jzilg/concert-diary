import Action from '../../interfaces/action.interface'
import Notification, { NotificationId } from '../../../entities/Notification.interface'

export const SET_LOADER_ON_STATE = 'SET_LOADER_ON_STATE'
export const SET_NOTIFICATION_ON_STATE = 'SET_NOTIFICATION_ON_STATE'
export const UNSET_NOTIFICATION_ON_STATE = 'UNSET_NOTIFICATION_ON_STATE'

export const setLoader = (value: boolean, feature): Action => ({
    type: `${feature} ${SET_LOADER_ON_STATE}`,
    feature,
    payload: {
        value,
    },
})

export const setNotification = (notification: Notification, feature: string): Action => ({
    type: `${feature} ${SET_NOTIFICATION_ON_STATE}`,
    feature,
    payload: {
        notification,
    },
})

export const unsetNotification = (notificationId: NotificationId, feature: string): Action => ({
    type: `${feature} ${UNSET_NOTIFICATION_ON_STATE}`,
    feature,
    payload: {
        notificationId,
    },
})
