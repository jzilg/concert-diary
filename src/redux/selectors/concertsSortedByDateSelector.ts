import { createSelector } from 'reselect'
import dayjs from 'dayjs'
import concertsSelector from './concertsSelector'
import Concert from '../../entities/Concert'

const concertsSortedByDateSelector = createSelector(
    concertsSelector,
    (concerts): Concert[] => {
        const byDate = ((concert0, concert1): number => {
            const concert0Timestamp = dayjs(concert0.date).unix()
            const concert1Timestamp = dayjs(concert1.date).unix()

            return concert0Timestamp - concert1Timestamp
        })

        return concerts.sort(byDate)
    },
)

export default concertsSortedByDateSelector
