import Action, { Feature } from '../../interfaces/action.interface'
import { ApiRequestOptions } from '../../middleware/core/apiMiddleware'

export const API_REQUEST = '[EVENT] API_REQUEST'
export const API_SUCCESS = '[EVENT] API_SUCCESS'
export const API_ERROR = '[EVENT] API_ERROR'

interface ApiActionPayload extends ApiRequestOptions {
    data?: object
    errorMsg?: string
}

export interface ApiAction extends Action {
    payload: ApiActionPayload
}

export function apiRequest(apiRequestOptions: ApiRequestOptions, feature: Feature): ApiAction {
    return {
        type: `${feature} ${API_REQUEST}`,
        meta: {
            feature,
        },
        payload: {
            ...apiRequestOptions,
        },
    }
}

export function apiSuccess(successAction: Function, data: object, feature: Feature): Action {
    return {
        type: `${feature} ${API_SUCCESS}`,
        meta: {
            feature,
        },
        payload: {
            successAction,
            data,
        },
    }
}

export function apiError(errorMsg: string, feature: Feature): Action {
    return {
        type: `${feature} ${API_ERROR}`,
        meta: {
            feature,
        },
        payload: {
            errorMsg,
        },
    }
}
