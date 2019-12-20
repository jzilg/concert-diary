import { createAction } from 'typesafe-actions'
import { ApiRequestOptions } from '../../middleware/core/apiMiddleware'

export const apiRequest = createAction('[API] [EVENT] API_REQUEST')<ApiRequestOptions, { causedBy: string }>()

export const apiSuccess = createAction('[API] [EVENT] API_SUCCESS')<{ successAction: Function; data: object }, { causedBy: string }>()

export const apiFailure = createAction('[API] [EVENT] API_ERROR')<{ failureAction: Function; error: Error }, { causedBy: string }>()
