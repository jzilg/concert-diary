import { createSelector } from 'reselect'
import State from '../interfaces/state.interface'
import { FestivalsState } from '../reducers/festivalsReducer'
import { Festivals } from '../../entities/Festival.interface'

const festivalsSelector = (state: State): FestivalsState => state.festivals

function festivalsSortedByDate(festivals: Festivals): number {
    const bands = new Set()

    festivals.forEach((festival) => {
        festival.bands.forEach((band) => {
            bands.add(band)
        })
    })

    return bands.size
}

const numOfFestivalsSelector = createSelector(
    festivalsSelector,
    festivalsSortedByDate,
)

export default numOfFestivalsSelector
