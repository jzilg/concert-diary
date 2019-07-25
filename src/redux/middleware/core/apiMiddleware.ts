import getApiOptions, { HTTPMethod } from '../../getApiOptions'
import {
    ApiAction,
    API_REQUEST,
    API_SUCCESS,
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

const apiMiddleware = ({ dispatch }) => next => (action: ApiAction) => {
    next(action)

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
            .then(data => dispatch(apiSuccess(successAction, data, action.meta.feature)))
            .catch(error => dispatch(apiError(error.message, action.meta.feature)))

        return
    }

    if (action.type.includes(API_SUCCESS)) {
        const { successAction, data } = action.payload
        dispatch(successAction(data))
    }
}

export default apiMiddleware
