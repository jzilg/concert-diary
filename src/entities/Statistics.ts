import type MostSeenBand from './MostSeenBand'
import type MostCommonCompanion from './MostCommonCompanion'

type Statistics = {
    mostSeenBands: MostSeenBand[]
    mostCommonCompanions: MostCommonCompanion[]
    totalConcertsCount: number
    totalFestivalsCount: number
    totalBandsCount: number
    totalLocationsCount: number
}

export default Statistics
