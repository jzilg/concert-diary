import { createSelector } from 'reselect'
import statisticsSelector from './statisticsSelector'

const numOfLocationsSelector = createSelector(
    statisticsSelector,
    (statistics) : number => statistics.totalLocationsCount,
)

export default numOfLocationsSelector
