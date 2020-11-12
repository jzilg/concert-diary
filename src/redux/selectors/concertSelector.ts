import { createSelector } from 'reselect'
import Concert from '../../entities/Concert'
import concertsSelector from './concertsSelector'
import paramsSelector from './paramsSelector'
import todaysDate from '../../utils/todaysDate'

function createEmptyConcert(id: number): Concert {
    return {
        id,
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
    (concerts, params): Concert => {
        const paramId = parseInt(params.id as string, 10)

        return concerts.find((concert) => concert.id === paramId) || createEmptyConcert(paramId)
    },
)

export default concertSelector
