import { createSelector } from 'reselect'
import festivalSelector from './festivalSelector'

const festivalExistsSelector = createSelector(
    festivalSelector,
    (festival): boolean => festival.bands.length > 0,
)

export default festivalExistsSelector
