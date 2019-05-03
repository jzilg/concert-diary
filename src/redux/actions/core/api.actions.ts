import Action from '../../interfaces/action.interface'
import { ApiRequestOptions } from '../../middleware/core/apiMiddleware'

export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'

export const apiRequest = (apiRequestOptions: ApiRequestOptions, feature: string): Action => ({
    type: `${feature} ${API_REQUEST}`,
    feature,
    payload: { ...apiRequestOptions },
})

export const apiSuccess = (successAction: Function, data: object, feature: string): Action => ({
    type: `${feature} ${API_SUCCESS}`,
    feature,
    payload: {
        successAction,
        data,
    },
})

export const apiError = (errorMsg: string, feature: string): Action => ({
    type: `${feature} ${API_ERROR}`,
    feature,
    payload: {
        errorMsg,
    },
})
