import { createSelector } from 'reselect'
import State from '../types/state'
import { FestivalsState } from '../reducers/festivalsReducer'
import { Festivals } from '../../entities/Festival'

const festivalsSelector = (state: State): FestivalsState => state.festivals

function calcNumOfFestivals(festivals: Festivals): number {
    return festivals.length
}

const numOfFestivalsSelector = createSelector(
    festivalsSelector,
    calcNumOfFestivals,
)

export default numOfFestivalsSelector
