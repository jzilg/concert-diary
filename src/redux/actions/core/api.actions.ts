import { createAction } from 'typesafe-actions'
import { ApiRequestOptions } from '../../middleware/core/apiMiddleware'

export const apiRequest = createAction('EVT / API / REQUEST')<ApiRequestOptions, { causedBy: string }>()

export const apiSuccess = createAction('EVT / API / SUCCESS')<{ successAction: Function; data: unknown }, { causedBy: string }>()

export const apiFailure = createAction('EVT / API / ERROR')<{ failureAction: Function; error: Error }, { causedBy: string }>()
