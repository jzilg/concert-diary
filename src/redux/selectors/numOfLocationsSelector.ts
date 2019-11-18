import { createSelector } from 'reselect'
import State from '../types/state'
import { ConcertsState } from '../reducers/concertsReducer'
import { Concerts } from '../../entities/Concert'

const concertsSelector = (state: State): ConcertsState => state.concerts

function concertsSortedByDate(concerts: Concerts): number {
    const locations = new Set()

    concerts.forEach((concert) => {
        locations.add(concert.location)
    })

    return locations.size
}

const numOfLocationsSelector = createSelector(
    concertsSelector,
    concertsSortedByDate,
)

export default numOfLocationsSelector
