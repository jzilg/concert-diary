import { createSelector } from 'reselect'
import moment from 'moment'
import { FestivalsState } from '../reducers/festivalsReducer'

const festivalsSelector = (state): FestivalsState => state.festivals

function festivalsSortedByDate(festivals): FestivalsState {
    const byDate = ((festival0, festival1): number => {
        const festival0Timestamp = moment(festival0.date.from).unix()
        const festival1Timestamp = moment(festival1.date.from).unix()
        return festival0Timestamp - festival1Timestamp
    })
    return festivals.sort(byDate)
}

const festivalsSortedByDateSelector = createSelector(
    festivalsSelector,
    festivalsSortedByDate,
)

export default festivalsSortedByDateSelector
