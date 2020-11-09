import { createSelector } from 'reselect'
import dayjs from 'dayjs'
import { Festivals } from '../../entities/Festival'
import { FestivalsState } from '../reducers/festivalsReducer'
import festivalsSelector from './festivalsSelector'

function festivalsSortedByDate(festivals: Festivals): FestivalsState {
    const byDate = ((festival0, festival1): number => {
        const festival0Timestamp = dayjs(festival0.date.from).unix()
        const festival1Timestamp = dayjs(festival1.date.from).unix()
        return festival0Timestamp - festival1Timestamp
    })
    return festivals.sort(byDate)
}

const festivalsSortedByDateSelector = createSelector(
    festivalsSelector,
    festivalsSortedByDate,
)

export default festivalsSortedByDateSelector
