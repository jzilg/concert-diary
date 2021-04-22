import { createReducer } from 'typesafe-actions'
import Statistics from '../../entities/Statistics'
import { setStatisticsState } from '../actions/app/statistics.actions'

export type StatisticsState = Statistics

const defaultState: StatisticsState = {
    mostSeenBands: [],
    mostCommonCompanions: [],
    totalFestivalsCount: 0,
    totalConcertsCount: 0,
    totalBandsCount: 0,
    totalLocationsCount: 0,
}

const statisticsReducer = createReducer(defaultState)
    .handleAction(setStatisticsState, (state, action) => action.payload)

export default statisticsReducer
