import type { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import type { ApiHandler } from '../../apiHandler'
import type { Api } from '../../../api'
import {
    loadStatistics,
    loadStatisticsAsync,
    setStatisticsState,
} from '../../actions/app/statistics.actions'
import apiTokenSelector from '../../selectors/apiTokenSelector'

// eslint-disable-next-line max-len
const statisticsMiddleware = (api: Api, apiHandler: ApiHandler): Middleware => (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

    if (isActionOf(loadStatistics, action)) {
        const apiToken = apiTokenSelector(getState())

        apiHandler({
            options: api.getStatisticsOptions(apiToken),
            asyncActions: loadStatisticsAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(loadStatisticsAsync.success, action)) {
        dispatch(setStatisticsState(action.payload))
    }
}

export default statisticsMiddleware
