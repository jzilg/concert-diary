import { Middleware } from 'redux'
import { isActionOf } from 'typesafe-actions'
import { fetchStatisticsAsync, setStatisticsState } from '../../actions/app/statistics.actions'
import { getStatisticsApiUrl } from '../../../api'
import { apiRequest } from '../../actions/core/api.actions'

const statisticsMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const { dispatch } = store

    if (isActionOf(fetchStatisticsAsync.request, action)) {
        const url = getStatisticsApiUrl()

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
