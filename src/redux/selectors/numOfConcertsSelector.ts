import { createSelector } from 'reselect'
import { Concerts } from '../../entities/Concert'
import concertsSelector from './concertsSelector'

function calcNumOfConcerts(concerts: Concerts): number {
    return concerts.length
}

const numOfConcertsSelector = createSelector(
    concertsSelector,
    calcNumOfConcerts,
)

export default numOfConcertsSelector
