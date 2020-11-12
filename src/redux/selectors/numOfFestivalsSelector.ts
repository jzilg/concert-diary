import { createSelector } from 'reselect'
import festivalsSelector from './festivalsSelector'

const numOfFestivalsSelector = createSelector(
    festivalsSelector,
    (festivals): number => festivals.length,
)

export default numOfFestivalsSelector
