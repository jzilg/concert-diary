import uniqid from 'uniqid'
import Notification from '../../../entities/Notification.interface'
import {
    ApiAction,
    API_REQUEST,
    API_SUCCESS,
    API_ERROR,
} from '../../actions/core/api.actions'
import { increaseLoaderCount, decreaseLoaderCount, addNotificationToState } from '../../actions/core/ui.actions'

const apiUiMiddleware = ({ dispatch }) => next => (action: ApiAction) => {
    next(action)

    if (action.type.includes(API_REQUEST)) {
        dispatch(increaseLoaderCount(action.meta.feature))
    }

    if (action.type.includes(API_SUCCESS)) {
        dispatch(decreaseLoaderCount(action.meta.feature))
    }

    if (action.type.includes(API_ERROR)) {
        dispatch(decreaseLoaderCount(action.meta.feature))

        const notification: Notification = {
            id: uniqid(),
            type: 'error',
            message: action.payload.errorMsg,
        }
        dispatch(addNotificationToState(notification, action.meta.feature))
    }
}

export default apiUiMiddleware
