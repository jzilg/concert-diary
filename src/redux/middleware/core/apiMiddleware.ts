import { Middleware } from 'redux'
import { ActionCreator, isActionOf } from 'typesafe-actions'
import getApiOptions, { HTTPMethod } from '../../getApiOptions'
import { apiRequest, apiSuccess, apiFailure } from '../../actions/core/api.actions'
import Error from '../../../entities/Error'

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

        return fetch(url, options)
            .then((response) => {
                if (response.ok) {
                    response.json().then((data) => {
                        dispatch(apiSuccess({
                            successAction,
                            data,
                        }, { causedBy }))
                    })
                } else {
                    const error: Error = {
                        status: response.status,
                        message: response.statusText,
                    }

                    dispatch(apiFailure({
                        failureAction,
                        error,
                    }, { causedBy }))
                }
            })
            .catch((apiError) => {
                const error: Error = {
                    status: 0,
                    message: apiError.message,
                }

                dispatch(apiFailure({
                    failureAction,
                    error,
                }, { causedBy }))

                /* eslint-disable-next-line no-console */
                console.error(apiError)
            })
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
