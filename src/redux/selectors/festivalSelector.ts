import { createSelector } from 'reselect'
import { ParsedQuery } from 'query-string'
import Festival, { Festivals } from '../../entities/Festival'
import festivalsSelector from './festivalsSelector'
import paramsSelector from './paramsSelector'

function createEmptyFestival(id: number): Festival {
    return {
        id,
        date: {
            from: '',
            until: '',
        },
        name: '',
        bands: [],
        companions: [],
    }
}

function getFestival(festivals: Festivals, params: ParsedQuery): Festival {
    const paramId = parseInt(params.id as string, 10)

    return festivals.find((festival) => festival.id === paramId) || createEmptyFestival(paramId)
}

const festivalSelector = createSelector(
    festivalsSelector,
    paramsSelector,
    getFestival,
)

export default festivalSelector
