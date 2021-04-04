import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import {
    loadStatistics,
    loadStatisticsAsync,
    setStatisticsState,
} from '../../actions/app/statistics.actions'
import apiTokenSelector from '../../selectors/apiTokenSelector'
import { ApiHandler } from '../../apiHandler'
import { getStatisticsOptions } from '../../../api/api'

// eslint-disable-next-line max-len
const statisticsMiddleware = (apiHandler: ApiHandler): Middleware => (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

    if (isActionOf(loadStatistics, action)) {
        const apiToken = apiTokenSelector(getState())

        apiHandler({
            options: getStatisticsOptions(apiToken),
            asyncActions: loadStatisticsAsync,
            causedBy: action,
        }, dispatch)
    }

    if (isActionOf(loadStatisticsAsync.success, action)) {
        dispatch(setStatisticsState(action.payload))
    }
}

export default statisticsMiddleware
