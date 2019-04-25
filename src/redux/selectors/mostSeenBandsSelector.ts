import { createSelector } from 'reselect'
import State from '../interfaces/state.interface'
import { ConcertsState } from '../reducers/concertsReducer'
import { Concerts } from '../../entities/Concert.interface'

const concertsSelector = (state: State): ConcertsState => state.concerts

export interface MostSeenBand {
    name: string
    mainCount: number
    supportCount: number
    totalCount: number
}

interface Band {
    name: string
    type: string
}

function getMostSeenBands(concerts: Concerts): MostSeenBand[] {
    const bands: Band[] = concerts.reduce((accumulator, concert) => {
        const mainBand = { name: concert.band, type: 'main' }
        const supportBands = concert.supportBands.map(band => ({ name: band, type: 'support' }))
        return [
            ...accumulator,
            ...supportBands,
            mainBand,
        ]
    }, [])

    const toMostSeenBands = (accumulator, band: Band): MostSeenBand[] => {
        const multipleEntry = accumulator.find(prevBand => prevBand.name === band.name)
        const entryAlreadyExists = !!multipleEntry

        const newMostSeenBand = {
            name: band.name,
            mainCount: band.type === 'main' ? 1 : 0,
            supportCount: band.type === 'support' ? 1 : 0,
            totalCount: 1,
        }

        if (entryAlreadyExists) {
            multipleEntry.totalCount += 1
            if (band.type === 'support') {
                multipleEntry.supportCount += 1
            } else {
                multipleEntry.mainCount += 1
            }
        } else {
            accumulator.push(newMostSeenBand)
        }

        return accumulator
    }

    const byMainCount = (band0, band1): number => band1.mainCount - band0.mainCount
    const byTotalCount = (band0, band1): number => band1.totalCount - band0.totalCount

    const mostSeenBands = bands
        .reduce(toMostSeenBands, [])
        .sort(byMainCount)
        .sort(byTotalCount)

    return mostSeenBands
}

const mostSeenBandsSelector = createSelector(
    concertsSelector,
    getMostSeenBands,
)

export default mostSeenBandsSelector
