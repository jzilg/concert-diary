import { createSelector } from 'reselect'
import type Festival from '../../entities/Festival'
import festivalsSelector from './festivalsSelector'
import paramsSelector from './paramsSelector'
import todaysDate from '../../utils/todaysDate'

const createEmptyFestival = (): Festival => ({
    id: '',
    date: {
        from: todaysDate,
        until: todaysDate,
    },
    name: '',
    bands: [],
    companions: [],
})

const festivalSelector = createSelector(
    festivalsSelector,
    paramsSelector,
    (festivals, params): Festival => (
        festivals.find((festival) => festival.id === params.id) || createEmptyFestival()
    ),
)

export default festivalSelector
