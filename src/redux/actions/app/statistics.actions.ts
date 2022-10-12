import { createAction, createAsyncAction } from 'typesafe-actions'
import type Statistics from '../../../entities/Statistics'

export const loadStatisticsAsync = createAsyncAction(
    'EVT / Statistics / load request',
    'EVT / Statistics / load success',
    'EVT / Statistics / load failure',
)<undefined, Statistics, Error>()

export const loadStatistics = createAction('CMD / Statistics / load')()
export const setStatisticsState = createAction('DOC / Statistics / set state')<Statistics>()
