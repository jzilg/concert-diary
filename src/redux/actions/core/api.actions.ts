import Action, { Feature } from '../../interfaces/action.interface'
import { ApiRequestOptions } from '../../middleware/core/apiMiddleware'

export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'

interface ApiActionPayload extends ApiRequestOptions {
    data?: object
    errorMsg?: string
}

export interface ApiAction extends Action {
    payload: ApiActionPayload
}

export const apiRequest = (apiRequestOptions: ApiRequestOptions, feature: Feature): ApiAction => ({
    type: `${feature} ${API_REQUEST}`,
    feature,
    payload: { ...apiRequestOptions },
})

export const apiSuccess = (successAction: Function, data: object, feature: Feature): Action => ({
    type: `${feature} ${API_SUCCESS}`,
    feature,
    payload: {
        successAction,
        data,
    },
})

export const apiError = (errorMsg: string, feature: Feature): Action => ({
    type: `${feature} ${API_ERROR}`,
    feature,
    payload: {
        errorMsg,
    },
})
