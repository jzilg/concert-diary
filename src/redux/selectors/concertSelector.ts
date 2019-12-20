import { createSelector } from 'reselect'
import { ParsedQuery } from 'query-string'
import Concert, { Concerts } from '../../entities/Concert'
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

function getConcert(concerts: Concerts, params: ParsedQuery): Concert {
    const paramId = parseInt(params.id as string, 10)

    return concerts.find((concert) => concert.id === paramId) || createEmptyConcert(paramId)
}

const concertSelector = createSelector(
    concertsSelector,
    paramsSelector,
    getConcert,
)

export default concertSelector
