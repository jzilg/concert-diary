import { createSelector } from 'reselect'
import Festival from '../../entities/Festival'
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

const festivalSelector = createSelector(
    festivalsSelector,
    paramsSelector,
    (festivals, params): Festival => {
        const paramId = parseInt(params.id as string, 10)

        return festivals.find((festival) => festival.id === paramId) || createEmptyFestival(paramId)
    },
)

export default festivalSelector
