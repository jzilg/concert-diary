import { createAction } from 'typesafe-actions'
import { ApiRequestOptions } from '../../middleware/core/apiMiddleware'

export const apiRequest = createAction('EVT / API / request')<ApiRequestOptions, { causedBy: string }>()

export const apiSuccess = createAction('EVT / API / success')<{ successAction: Function; data: unknown }, { causedBy: string }>()

export const apiFailure = createAction('EVT / API / failure')<{ failureAction: Function; error: Error }, { causedBy: string }>()
