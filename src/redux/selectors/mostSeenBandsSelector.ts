import { createSelector } from 'reselect'
import State from '../types/State'
import { ConcertsState } from '../reducers/concertsReducer'
import { Concerts } from '../../entities/Concert'
import { FestivalsState } from '../reducers/festivalsReducer'
import { Festivals } from '../../entities/Festival'

const concertsSelector = (state: State): ConcertsState => state.concerts
const festivalsSelector = (state: State): FestivalsState => state.festivals

export type MostSeenBand = {
    name: string
    mainCount: number
    supportCount: number
    festivalCount: number
    totalCount: number
}

type Band = {
    name: string
    type: string
}

function getMostSeenBands(concerts: Concerts, festivals: Festivals): MostSeenBand[] {
    const bandsFromConcerts: Band[] = concerts.reduce((accumulator, concert) => {
        const mainBand = { name: concert.band, type: 'main' }
        const supportBands = concert.supportBands.map((band) => ({ name: band, type: 'support' }))
        return [
            ...accumulator,
            ...supportBands,
            mainBand,
        ]
    }, [])

    const bandsFromFestivals: Band[] = festivals.reduce((accumulator, festival) => {
        const bands = festival.bands.map((band) => ({ name: band, type: 'festival' }))
        return [
            ...accumulator,
            ...bands,
        ]
    }, [])

    const bands = [
        ...bandsFromConcerts,
        ...bandsFromFestivals,
    ]

    const toMostSeenBands = (accumulator, band: Band): MostSeenBand[] => {
        const multipleEntry = accumulator.find((prevBand) => prevBand.name === band.name)
        const entryAlreadyExists = !!multipleEntry

        const newMostSeenBand = {
            name: band.name,
            mainCount: band.type === 'main' ? 1 : 0,
            supportCount: band.type === 'support' ? 1 : 0,
            festivalCount: band.type === 'festival' ? 1 : 0,
            totalCount: 1,
        }

        if (entryAlreadyExists) {
            multipleEntry.totalCount += 1
            if (band.type === 'support') {
                multipleEntry.supportCount += 1
            } else if (band.type === 'festival') {
                multipleEntry.festivalCount += 1
            } else {
                multipleEntry.mainCount += 1
            }
        } else {
            accumulator.push(newMostSeenBand)
        }

        return accumulator
    }

    const byMainCount = (band0, band1): number => band1.mainCount - band0.mainCount
    const byFestivalCount = (band0, band1): number => band1.festivalCount - band0.festivalCount
    const byTotalCount = (band0, band1): number => band1.totalCount - band0.totalCount

    const mostSeenBands = bands
        .reduce(toMostSeenBands, [])
        .sort(byFestivalCount)
        .sort(byMainCount)
        .sort(byTotalCount)

    return mostSeenBands
}

const mostSeenBandsSelector = createSelector(
    concertsSelector,
    festivalsSelector,
    getMostSeenBands,
)

export default mostSeenBandsSelector
