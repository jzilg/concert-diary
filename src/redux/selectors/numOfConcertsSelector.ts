import { createSelector } from 'reselect'
import statisticsSelector from './statisticsSelector'

const numOfConcertsSelector = createSelector(
    statisticsSelector,
    (statistics): number => statistics.totalConcertsCount,
)

export default numOfConcertsSelector
