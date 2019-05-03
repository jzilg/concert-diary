import uniqid from 'uniqid'
import Notification from '../../../entities/Notification.interface'
import MiddlewareCreator from '../../interfaces/middleware-creator.interface'
import {
    ApiAction,
    API_REQUEST,
    API_SUCCESS,
    API_ERROR,
} from '../../actions/core/api.actions'
import { increaseLoaderCount, decreaseLoaderCount, setNotification } from '../../actions/core/ui.actions'

const apiUiMiddleware = ({ dispatch }): MiddlewareCreator => next => (action: ApiAction) => {
    next(action)

    if (action.type.includes(API_REQUEST)) {
        dispatch(increaseLoaderCount(action.feature))
    }

    if (action.type.includes(API_SUCCESS)) {
        dispatch(decreaseLoaderCount(action.feature))
    }

    if (action.type.includes(API_ERROR)) {
        dispatch(decreaseLoaderCount(action.feature))

        const notification: Notification = {
            id: uniqid(),
            type: 'error',
            message: action.payload.errorMsg,
        }
        dispatch(setNotification(notification, action.feature))
    }
}

export default apiUiMiddleware
