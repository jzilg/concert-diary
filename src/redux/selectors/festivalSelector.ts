import { createSelector } from 'reselect'
import Festival from '../../entities/Festival'
import festivalsSelector from './festivalsSelector'
import paramsSelector from './paramsSelector'

function createEmptyFestival(): Festival {
    return {
        id: '',
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
    (festivals, params): Festival => (
        festivals.find((festival) => festival.id === params.id) || createEmptyFestival()
    ),
)

export default festivalSelector
