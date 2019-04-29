import { createSelector } from 'reselect'
import State from '../interfaces/state.interface'
import { ConcertsState } from '../reducers/concertsReducer'
import { Concerts } from '../../entities/Concert.interface'
import { FestivalsState } from '../reducers/festivalsReducer'
import { Festivals } from '../../entities/Festival.interface'

const concertsSelector = (state: State): ConcertsState => state.concerts
const festivalsSelector = (state: State): FestivalsState => state.festivals

function calcNumOfBands(concerts: Concerts, festivals: Festivals): number {
    const bands = new Set()

    concerts.forEach((concert) => {
        bands.add(concert.band)
        concert.supportBands.forEach((supportBand) => {
            bands.add(supportBand)
        })
    })

    festivals.forEach((festival) => {
        festival.bands.forEach((supportBand) => {
            bands.add(supportBand)
        })
    })

    return bands.size
}

const numOfBandsSelector = createSelector(
    concertsSelector,
    festivalsSelector,
    calcNumOfBands,
)

export default numOfBandsSelector
