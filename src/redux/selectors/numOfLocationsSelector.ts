import { createSelector } from 'reselect'
import { Concerts } from '../../entities/Concert'
import concertsSelector from './concertsSelector'

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
