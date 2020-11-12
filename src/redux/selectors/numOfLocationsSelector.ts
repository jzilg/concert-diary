import { createSelector } from 'reselect'
import concertsSelector from './concertsSelector'

const numOfLocationsSelector = createSelector(
    concertsSelector,
    (concerts): number => {
        const locations = new Set()

        concerts.forEach((concert) => {
            locations.add(concert.location)
        })

        return locations.size
    },
)

export default numOfLocationsSelector
