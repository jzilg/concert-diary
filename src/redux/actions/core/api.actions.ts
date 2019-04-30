import Action from '../../interfaces/action.interface'
import { ApiRequestOptions } from '../../middleware/core/apiMiddleware'

export const API_REQUEST = 'API_REQUEST'
export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'

export const apiRequest = (apiRequestOptions: ApiRequestOptions, triggeredBy: string): Action => ({
    type: `${API_REQUEST} to ${triggeredBy}`,
    payload: { ...apiRequestOptions },
    meta: {
        triggeredBy,
    },
})

export const apiSuccess = (successAction: Function, data: object, triggeredBy: string): Action => ({
    type: `${API_SUCCESS} in ${triggeredBy}`,
    payload: {
        successAction,
        data,
    },
    meta: {
        triggeredBy,
    },
})

export const apiError = (errorMsg: string, triggeredBy: string): Action => ({
    type: `${API_ERROR} while ${triggeredBy}`,
    payload: {
        errorMsg,
    },
    meta: {
        triggeredBy,
    },
})
