import { createSelector } from 'reselect'
import { Concerts } from '../../entities/Concert'
import { Festivals } from '../../entities/Festival'
import concertsSelector from './concertsSelector'
import festivalsSelector from './festivalsSelector'

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
