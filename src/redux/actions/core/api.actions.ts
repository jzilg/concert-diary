import { createAction } from 'typesafe-actions'
import { ApiRequestOptions } from '../../middleware/core/apiMiddleware'

export const apiRequest = createAction(
    '[API] [EVENT] API_REQUEST',
    (apiRequestOptions: ApiRequestOptions, causedBy: string) => ({
        ...apiRequestOptions,
    }),
    (apiRequestOptions: ApiRequestOptions, causedBy: string) => ({
        causedBy,
    }),
)()

export const apiSuccess = createAction(
    '[API] [EVENT] API_SUCCESS',
    (successAction: Function, data: object, causedBy: string) => ({
        successAction,
        data,
    }),
    (successAction: Function, data: object, causedBy: string) => ({
        causedBy,
    }),

)()

export const apiFailure = createAction(
    '[API] [EVENT] API_FAILURE',
    (failureAction: Function, error: Error, causedBy: string) => ({
        failureAction,
        error,
    }),
    (failureAction: Function, error: Error, causedBy: string) => ({
        causedBy,
    }),
)()
