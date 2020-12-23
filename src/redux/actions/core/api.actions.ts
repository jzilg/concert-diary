import { Action, createAction } from 'typesafe-actions'
import { ApiRequestOptions } from '../../middleware/core/apiMiddleware'
import ErrorType from '../../../entities/ErrorType'

export const apiRequest = createAction('EVT / API / request')<ApiRequestOptions, { causedBy: Action }>()

export const apiSuccess = createAction('EVT / API / success')<{ successAction: Function; data: unknown }, { causedBy: Action }>()

export const apiFailure = createAction('EVT / API / failure')<{ failureAction: Function; error: Error; type: ErrorType }, { causedBy: Action }>()
