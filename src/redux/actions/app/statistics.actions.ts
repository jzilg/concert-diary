import { createAction, createAsyncAction } from 'typesafe-actions'
import Statistics from '../../../entities/Statistics'

export const fetchStatisticsAsync = createAsyncAction(
    'CMD / Statistics / fetch request',
    'EVT / Statistics / fetch success',
    'EVT / Statistics / fetch failure',
)<undefined, Statistics, Error>()

export const setStatisticsState = createAction('DOC / Statistics / set state')<Statistics>()
