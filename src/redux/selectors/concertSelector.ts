import { createSelector } from 'reselect'
import Concert from '../../entities/Concert'
import concertsSelector from './concertsSelector'
import paramsSelector from './paramsSelector'
import todaysDate from '../../utils/todaysDate'

function createEmptyConcert(): Concert {
    return {
        id: '',
        band: '',
        supportBands: [],
        location: '',
        date: todaysDate,
        companions: [],
    }
}

const concertSelector = createSelector(
    concertsSelector,
    paramsSelector,
    (concerts, params): Concert => (
        concerts.find((concert) => concert.id === params.id) || createEmptyConcert()
    ),
)

export default concertSelector
