import { Dispatch } from 'redux'
import { Action, ActionCreator } from 'typesafe-actions'
import ApiError from '../entities/ApiError'
import ApiRequest from '../entities/ApiRequest'

type ApiHandlerOptions = {
    request: ApiRequest
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

type Fetch = typeof window.fetch

// eslint-disable-next-line max-len
export const createApiHandler = (networkRequest: Fetch) => (apiHandlerOptions: ApiHandlerOptions, dispatch: Dispatch): Promise<unknown> => {
    const {
        request,
        asyncActions,
        causedBy,
    } = apiHandlerOptions
    const { url } = request

    dispatch(asyncActions.request(undefined, {
        asyncActionType: AsyncActionType.Request,
        request,
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
            request,
            causedBy,
        }))
    }

    const handleSuccess = (data?: object): void => {
        dispatch(asyncActions.success(data, {
            asyncActionType: AsyncActionType.Success,
            request,
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

    return networkRequest(encodeURI(url), request)
        .then(handleResponse)
        .catch(handleError('fetch'))
}

const apiHandler = createApiHandler(window.fetch)

export type ApiHandler = typeof apiHandler

export default apiHandler
