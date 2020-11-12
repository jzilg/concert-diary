import { createSelector } from 'reselect'
import concertsSelector from './concertsSelector'

const numOfConcertsSelector = createSelector(
    concertsSelector,
    (concerts): number => concerts.length,
)

export default numOfConcertsSelector
