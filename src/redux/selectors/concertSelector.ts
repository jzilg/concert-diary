import { createSelector } from 'reselect'
import type Concert from '../../entities/Concert'
import concertsSelector from './concertsSelector'
import paramsSelector from './paramsSelector'
import todaysDate from '../../utils/todaysDate'

const createEmptyConcert = (): Concert => ({
    id: '',
    band: '',
    supportBands: [],
    location: '',
    date: todaysDate,
    companions: [],
})

const concertSelector = createSelector(
    concertsSelector,
    paramsSelector,
    (concerts, params): Concert => (
        concerts.find((concert) => concert.id === params.id) || createEmptyConcert()
    ),
)

export default concertSelector
