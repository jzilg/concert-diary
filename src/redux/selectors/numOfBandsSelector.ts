import { createSelector } from 'reselect'
import statisticsSelector from './statisticsSelector'

const numOfBandsSelector = createSelector(
    statisticsSelector,
    (statistics): number => statistics.totalBandsCount,
)

export default numOfBandsSelector
