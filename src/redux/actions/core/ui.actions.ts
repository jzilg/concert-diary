import Action, { Feature } from '../../interfaces/action.interface'
import Notification, { NotificationId } from '../../../entities/Notification.interface'

export const INCREASE_LOADER_COUNT_ON_STATE = 'INCREASE_LOADER_COUNT_ON_STATE'
export const DECREASE_LOADER_COUNT_ON_STATE = 'DECREASE_LOADER_COUNT_ON_STATE'
export const ADD_NOTIFICATION_TO_STATE = 'ADD_NOTIFICATION_TO_STATE'
export const REMOVE_NOTIFICATION_FROM_STATE = 'REMOVE_NOTIFICATION_FROM_STATE'

export const increaseLoaderCount = (feature: Feature): Action => ({
    type: `${feature} ${INCREASE_LOADER_COUNT_ON_STATE}`,
    feature,
})

export const decreaseLoaderCount = (feature: Feature): Action => ({
    type: `${feature} ${DECREASE_LOADER_COUNT_ON_STATE}`,
    feature,
})

export const setNotification = (notification: Notification, feature: Feature): Action => ({
    type: `${feature} ${ADD_NOTIFICATION_TO_STATE}`,
    feature,
    payload: {
        notification,
    },
})

export const unsetNotification = (notificationId: NotificationId, feature: Feature): Action => ({
    type: `${feature} ${REMOVE_NOTIFICATION_FROM_STATE}`,
    feature,
    payload: {
        notificationId,
    },
})
