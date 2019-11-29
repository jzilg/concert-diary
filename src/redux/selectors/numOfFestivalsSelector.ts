import { createSelector } from 'reselect'
import { Festivals } from '../../entities/Festival'
import festivalsSelector from './festivalsSelector'

function calcNumOfFestivals(festivals: Festivals): number {
    return festivals.length
}

const numOfFestivalsSelector = createSelector(
    festivalsSelector,
    calcNumOfFestivals,
)

export default numOfFestivalsSelector
