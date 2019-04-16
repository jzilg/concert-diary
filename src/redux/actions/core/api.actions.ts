import Action from '../../interfaces/action.interface'
import { ApiRequestOptions } from '../../middleware/core/apiMiddleware'

export const API_REQUEST = '[API] REQUEST'
export const API_SUCCESS = '[API] SUCCESS'
export const API_ERROR = '[API] ERROR'

export const apiRequest = (apiRequestOptions: ApiRequestOptions, triggeredBy: string): Action => ({
    type: API_REQUEST,
    payload: { ...apiRequestOptions },
    meta: {
        triggeredBy,
    },
})

export const apiSuccess = (successAction: Function, data: object, triggeredBy: string): Action => ({
    type: API_SUCCESS,
    payload: {
        successAction,
        data,
    },
    meta: {
        triggeredBy,
    },
})

export const apiError = (errorMsg: string, triggeredBy: string): Action => ({
    type: API_ERROR,
    payload: {
        errorMsg,
    },
    meta: {
        triggeredBy,
    },
})
