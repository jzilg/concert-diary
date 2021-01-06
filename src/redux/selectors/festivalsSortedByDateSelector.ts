import { createSelector } from 'reselect'
import dayjs from 'dayjs'
import festivalsSelector from './festivalsSelector'
import { Festivals } from '../../entities/Festival'

const festivalsSortedByDateSelector = createSelector(
    festivalsSelector,
    (festivals): Festivals => {
        const byDate = ((festival0, festival1): number => {
            const festival0Timestamp = dayjs(festival0.date.from).unix()
            const festival1Timestamp = dayjs(festival1.date.from).unix()

            return festival0Timestamp - festival1Timestamp
        })

        return festivals.sort(byDate)
    },
)

export default festivalsSortedByDateSelector
