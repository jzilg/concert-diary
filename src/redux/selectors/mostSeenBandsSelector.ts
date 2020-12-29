import { createSelector } from 'reselect'
import statisticsSelector from './statisticsSelector'
import MostSeenBand from '../../entities/MostSeenBand'

const mostSeenBandsSelector = createSelector(
    statisticsSelector,
    (statistics): MostSeenBand[] => statistics.mostSeenBands,
)

export default mostSeenBandsSelector
