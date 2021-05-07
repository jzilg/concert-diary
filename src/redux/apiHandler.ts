import { Dispatch } from 'redux'
import { Action, ActionCreator } from 'typesafe-actions'
import ApiError from '../entities/ApiError'
import ApiRequestOptions from '../entities/ApiRequestOptions'

export type ApiHandler = typeof apiHandler

type Fetch = typeof window.fetch

type ApiHandlerOptions = {
    options: ApiRequestOptions
    asyncActions: {
        request: ActionCreator
        success: ActionCreator
        failure: ActionCreator
    }
    causedBy: Action
}

type AsyncActionMeta = {
    asyncActionType: 'request' | 'success' | 'failure'
    options: ApiRequestOptions
    causedBy: Action
}

type ApiAction = Action & {
    meta: AsyncActionMeta
}

type ApiSuccessAction = ApiAction & {
    payload: unknown
}

type ApiFailureAction = ApiAction & {
    payload: ApiError
}

export const isApiRequestAction = (action: ApiAction): action is ApiAction => (
    action.meta?.asyncActionType === 'request'
)

export const isApiSuccessAction = (action: ApiAction): action is ApiSuccessAction => (
    action.meta?.asyncActionType === 'success'
)

export const isApiFailureAction = (action: ApiAction): action is ApiFailureAction => (
    action.meta?.asyncActionType === 'failure'
)

// eslint-disable-next-line max-len
export const createApiHandler = (fetch: Fetch) => (apiHandlerOptions: ApiHandlerOptions, dispatch: Dispatch): void => {
    const {
        options,
        asyncActions,
        causedBy,
    } = apiHandlerOptions
    const { url } = options

    dispatch(asyncActions.request(undefined, {
        asyncActionType: 'request',
        options,
        causedBy,
    } as AsyncActionMeta))

    const handleError = (type: ApiError['type'], status?: number) => (error: Error) => {
        const apiError: ApiError = {
            url,
            status,
            type,
            message: error.message,
        }

        dispatch(asyncActions.failure(apiError, {
            asyncActionType: 'failure',
            options,
            causedBy,
        } as AsyncActionMeta))
    }

    const handleSuccess = (data?: object): void => {
        dispatch(asyncActions.success(data, {
            asyncActionType: 'success',
            options,
            causedBy,
        } as AsyncActionMeta))
    }

    const handleResponse = (response: Response): void => {
        if (!response.ok) {
            response.json()
                .then((errorBody) => {
                    const error = new Error(errorBody.message)

                    handleError('response', response.status)(error)
                })
                .catch(() => {
                    const error = new Error(response.statusText)

                    handleError('json', response.status)(error)
                })

            return
        }

        if (response.status === 204) {
            handleSuccess()
            return
        }

        response.json()
            .then(handleSuccess)
            .catch(handleError('json', response.status))
    }

    fetch(encodeURI(url), options)
        .then(handleResponse)
        .catch(handleError('fetch'))
}

const apiHandler = createApiHandler(window.fetch)

export default apiHandler
