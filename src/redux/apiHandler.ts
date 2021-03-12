import { Dispatch } from 'redux'
import { Action, ActionCreator } from 'typesafe-actions'
import ApiError from '../entities/ApiError'
import ApiOptions from '../entities/ApiOptions'

export type ApiHandler = typeof apiHandler

type Fetch = typeof window.fetch

type ApiHandlerOptions = {
    options: ApiOptions
    asyncActions: {
        request: ActionCreator
        success: ActionCreator
        failure: ActionCreator
    }
    causedBy: Action
}

export const enum AsyncActionType {
    Request,
    Success,
    Failure,
}

// eslint-disable-next-line max-len
export const createApiHandler = (networkRequest: Fetch) => (apiHandlerOptions: ApiHandlerOptions, dispatch: Dispatch): Promise<unknown> => {
    const {
        options,
        asyncActions,
        causedBy,
    } = apiHandlerOptions
    const { url } = options

    dispatch(asyncActions.request(undefined, {
        asyncActionType: AsyncActionType.Request,
        options,
        causedBy,
    }))

    const handleError = (type: ApiError['type'], status?: number) => (error: Error) => {
        const apiError: ApiError = {
            url,
            status,
            type,
            message: error.message,
        }

        dispatch(asyncActions.failure(apiError, {
            asyncActionType: AsyncActionType.Failure,
            options,
            causedBy,
        }))
    }

    const handleSuccess = (data?: object): void => {
        dispatch(asyncActions.success(data, {
            asyncActionType: AsyncActionType.Success,
            options,
            causedBy,
        }))
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

    return networkRequest(encodeURI(url), options)
        .then(handleResponse)
        .catch(handleError('fetch'))
}

const apiHandler = createApiHandler(window.fetch)

export default apiHandler
