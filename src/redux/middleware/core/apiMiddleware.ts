import { Middleware } from 'redux'
import { ActionCreator, isActionOf } from 'typesafe-actions'
import getApiOptions, { HTTPMethod } from '../../getApiOptions'
import { apiRequest, apiSuccess, apiFailure } from '../../actions/core/api.actions'

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
        const options: RequestInit = getApiOptions({ method, headers, body })

        return fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                dispatch(apiSuccess({ successAction, data }, { causedBy }))
            })
            .catch((error) => {
                dispatch(apiFailure({ failureAction, error }, { causedBy }))
                /* eslint-disable-next-line no-console */
                console.error(error)
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
