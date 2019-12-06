import { createReducer } from 'typesafe-actions'
import { increaseLoaderCount, decreaseLoaderCount } from '../actions/core/loadingCount.actions'

export type LoadingCountState = number

export const defaultState: LoadingCountState = 0

const loadingCountReducer = createReducer(defaultState)
    .handleAction(increaseLoaderCount, (state) => state + 1)
    .handleAction(decreaseLoaderCount, (state) => state - 1)

export default loadingCountReducer
