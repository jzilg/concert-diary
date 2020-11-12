import { createSelector } from 'reselect'
import concertsSelector from './concertsSelector'
import festivalsSelector from './festivalsSelector'

const numOfBandsSelector = createSelector(
    concertsSelector,
    festivalsSelector,
    (concerts, festivals): number => {
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
    },
)

export default numOfBandsSelector
