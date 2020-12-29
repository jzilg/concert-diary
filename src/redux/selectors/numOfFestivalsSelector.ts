import { createSelector } from 'reselect'
import statisticsSelector from './statisticsSelector'

const numOfFestivalsSelector = createSelector(
    statisticsSelector,
    (statistics) : number => statistics.totalFestivalsCount,
)

export default numOfFestivalsSelector
