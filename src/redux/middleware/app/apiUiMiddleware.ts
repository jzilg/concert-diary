import { Store } from 'redux'
import {
    ApiAction,
    API_REQUEST,
    API_SUCCESS,
    API_ERROR,
} from '../../actions/core/api.actions'
import { NotificationOptions } from '../../../entities/Notification.interface'
import { increaseLoaderCount, decreaseLoaderCount, createNotification } from '../../actions/core/ui.actions'

const apiUiMiddleware = (store: Store) => next => (action: ApiAction) => {
    next(action)
    const { dispatch } = store

    if (action.type.includes(API_REQUEST)) {
        dispatch(increaseLoaderCount(action.meta.feature))
    }

    if (action.type.includes(API_SUCCESS)) {
        dispatch(decreaseLoaderCount(action.meta.feature))
    }

    if (action.type.includes(API_ERROR)) {
        dispatch(decreaseLoaderCount(action.meta.feature))

        const notificationOptions: NotificationOptions = {
            type: 'error',
            message: action.payload.errorMsg,
        }
        dispatch(createNotification(notificationOptions, action.meta.feature))
    }
}

export default apiUiMiddleware
