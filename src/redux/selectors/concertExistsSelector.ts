import { createSelector } from 'reselect'
import concertSelector from './concertSelector'
import Concert from '../../entities/Concert'

function getConcertExists(concert: Concert): boolean {
    return concert.band !== ''
}

const concertExistsSelector = createSelector(
    concertSelector,
    getConcertExists,
)

export default concertExistsSelector
