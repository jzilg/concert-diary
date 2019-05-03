import MiddlewareCreator from '../../interfaces/middleware-creator.interface'
import getApiOptions, { HTTPMethod } from '../../api-options'
import {
    ApiAction,
    API_REQUEST,
    API_SUCCESS,
    apiRequest,
    apiSuccess,
    apiError,
} from '../../actions/core/api.actions'

export interface ApiRequestOptions {
    url: string
    method: HTTPMethod
    headers?: object
    body?: string
    successAction: Function
}

const apiMiddleware = ({ dispatch }): MiddlewareCreator => next => (action: ApiAction) => {
    next(action)

    if (action.meta && action.meta.api) {
        dispatch(apiRequest(action.meta.api, action.feature))
        return
    }

    if (action.type.includes(API_REQUEST)) {
        const {
            url,
            method,
            headers,
            body,
            successAction,
        } = action.payload
        const options: object = getApiOptions({ method, headers, body })

        fetch(url, options)
            .then(response => response.json())
            .then(data => dispatch(apiSuccess(successAction, data, action.feature)))
            .catch(error => dispatch(apiError(error.message, action.feature)))

        return
    }

    if (action.type.includes(API_SUCCESS)) {
        const { successAction, data } = action.payload
        dispatch(successAction(data))
    }
}

export default apiMiddleware
