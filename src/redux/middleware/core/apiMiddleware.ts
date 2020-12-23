import { Middleware } from 'redux'
import { ActionCreator, isActionOf } from 'typesafe-actions'
import getApiOptions, { HTTPMethod } from '../../getApiOptions'
import { apiRequest, apiSuccess, apiFailure } from '../../actions/core/api.actions'
import ErrorType from '../../../entities/ErrorType'

export type ApiRequestOptions = {
    url: string
    method: HTTPMethod
    headers?: HeadersInit
    body?: BodyInit
    successAction: ActionCreator
    failureAction: ActionCreator
}

/* eslint-disable-next-line consistent-return */
const apiMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(apiRequest, action)) {
        const {
            url,
            method,
            headers,
            body,
            successAction,
            failureAction,
        } = action.payload
        const { causedBy } = action.meta
        const options: RequestInit = getApiOptions({
            method,
            headers,
            body,
        })

        const handleError = (type: ErrorType) => (error: Error) => {
            dispatch(apiFailure({
                failureAction,
                error,
                type,
            }, { causedBy }))
        }

        const handleSuccess = (data?: object): void => {
            dispatch(apiSuccess({
                successAction,
                data,
            }, { causedBy }))
        }

        const handleResponse = (response: Response): void => {
            if (!response.ok) {
                response.json()
                    .then((errorBody) => {
                        const error = new Error(errorBody)

                        handleError('response')(error)
                    })
                    .catch(() => {
                        const error = new Error(response.statusText)

                        handleError('json')(error)
                    })

                return
            }

            if (response.status === 204) {
                handleSuccess()
                return
            }

            response.json()
                .then(handleSuccess)
                .catch(handleError('json'))
        }

        return fetch(encodeURI(url), options)
            .then(handleResponse)
            .catch(handleError('fetch'))
    }

    if (isActionOf(apiSuccess, action)) {
        const { successAction, data } = action.payload

        dispatch(successAction(data))
    }

    if (isActionOf(apiFailure, action)) {
        const { failureAction, error } = action.payload

        dispatch(failureAction(error))
    }
}

export default apiMiddleware
