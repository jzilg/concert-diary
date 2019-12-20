import { createSelector } from 'reselect'
import festivalSelector from './festivalSelector'
import Festival from '../../entities/Festival'

function getFestivalExists(festival: Festival): boolean {
    return festival.bands.length > 0
}

const festivalExistsSelector = createSelector(
    festivalSelector,
    getFestivalExists,
)

export default festivalExistsSelector
