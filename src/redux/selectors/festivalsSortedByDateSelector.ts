import { createSelector } from 'reselect'
import dayjs from 'dayjs'
import { FestivalsState } from '../reducers/festivalsReducer'
import festivalsSelector from './festivalsSelector'

const festivalsSortedByDateSelector = createSelector(
    festivalsSelector,
    (festivals): FestivalsState => {
        const byDate = ((festival0, festival1): number => {
            const festival0Timestamp = dayjs(festival0.date.from).unix()
            const festival1Timestamp = dayjs(festival1.date.from).unix()
            return festival0Timestamp - festival1Timestamp
        })
        return festivals.sort(byDate)
    },
)

export default festivalsSortedByDateSelector
