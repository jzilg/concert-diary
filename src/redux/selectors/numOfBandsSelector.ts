import { createSelector } from 'reselect'
import State from '../interfaces/state.interface'
import { ConcertsState } from '../reducers/concertsReducer'
import { Concerts } from '../../entities/Concert.interface'

const concertsSelector = (state: State): ConcertsState => state.concerts

function concertsSortedByDate(concerts: Concerts): number {
    const bands = new Set()

    concerts.forEach((concert) => {
        bands.add(concert.band)
        concert.supportBands.forEach((supportBand) => {
            bands.add(supportBand)
        })
    })

    return bands.size
}

const numOfBandsSelector = createSelector(
    concertsSelector,
    concertsSortedByDate,
)

export default numOfBandsSelector
