import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import { fetchStatisticsAsync, setStatisticsState } from '../../actions/app/statistics.actions'
import { getStatisticsApiUrl } from '../../../api'
import { apiRequest } from '../../actions/core/api.actions'
import apiTokenSelector from '../../selectors/apiTokenSelector'

const statisticsMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch, getState } = store

    if (isActionOf(fetchStatisticsAsync.request, action)) {
        const apiToken = apiTokenSelector(getState())
        const url = getStatisticsApiUrl(apiToken)

        dispatch(apiRequest({
            url,
            method: 'GET',
            successAction: fetchStatisticsAsync.success,
            failureAction: fetchStatisticsAsync.failure,
        }, {
            causedBy: action,
        }))
    }

    if (isActionOf(fetchStatisticsAsync.success, action)) {
        const statistics = action.payload

        dispatch(setStatisticsState(statistics))
    }
}

export default statisticsMiddleware
