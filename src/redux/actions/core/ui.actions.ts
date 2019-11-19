import Action, { Feature } from '../../types/Action'
import Notification, { NotificationId, NotificationOptions } from '../../../entities/Notification'

export const INCREASE_LOADER_COUNT_ON_STATE = '[DOC] INCREASE_LOADER_COUNT_ON_STATE'
export const DECREASE_LOADER_COUNT_ON_STATE = '[DOC] DECREASE_LOADER_COUNT_ON_STATE'
export const CREATE_NOTIFICATION = '[CMD] CREATE_NOTIFICATION'
export const DELETE_NOTIFICATION = '[CMD] DELETE_NOTIFICATION'
export const ADD_NOTIFICATION_TO_STATE = '[DOC] ADD_NOTIFICATION_TO_STATE'
export const REMOVE_NOTIFICATION_FROM_STATE = '[DOC] REMOVE_NOTIFICATION_FROM_STATE'

export type UiAction = Action & {
    payload?: {
        notificationOptions?: NotificationOptions
        notification?: Notification
        notificationId?: NotificationId
    }
}

export function increaseLoaderCount(feature: Feature): Action {
    return {
        type: `${feature} ${INCREASE_LOADER_COUNT_ON_STATE}`,
        meta: {
            feature,
        },
    }
}

export function decreaseLoaderCount(feature: Feature): Action {
    return {
        type: `${feature} ${DECREASE_LOADER_COUNT_ON_STATE}`,
        meta: {
            feature,
        },
    }
}

export function deleteNotification(notificationId: NotificationId, feature: Feature): UiAction {
    return {
        type: `${feature} ${DELETE_NOTIFICATION}`,
        meta: {
            feature,
        },
        payload: {
            notificationId,
        },
    }
}

export function createNotification(
    notificationOptions: NotificationOptions,
    feature: Feature,
): UiAction {
    return {
        type: `${feature} ${CREATE_NOTIFICATION}`,
        meta: {
            feature,
        },
        payload: {
            notificationOptions,
        },
    }
}

export function addNotificationToState(notification: Notification, feature: Feature): UiAction {
    return {
        type: `${feature} ${ADD_NOTIFICATION_TO_STATE}`,
        meta: {
            feature,
        },
        payload: {
            notification,
        },
    }
}

export function removeNotificationFromState(
    notificationId: NotificationId,
    feature: Feature,
): UiAction {
    return {
        type: `${feature} ${REMOVE_NOTIFICATION_FROM_STATE}`,
        meta: {
            feature,
        },
        payload: {
            notificationId,
        },
    }
}
