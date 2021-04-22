import React, { FC } from 'preact/compat'
import Statistics from '../../entities/Statistics'
import MostSeenBands from '../most-seen-bands'
import GeneralStatistics from '../general-statistics'
import useOnMount from '../../hooks/useOnMount'
import MostCommonCompanionsTable from '../most-common-companions-table'

export type Props = {
    statistics: Statistics
    loadStatistics: () => void
}

const StatisticsView: FC<Props> = (props) => {
    const {
        statistics,
        loadStatistics,
    } = props
    const {
        mostSeenBands,
        totalBandsCount,
        totalConcertsCount,
        totalFestivalsCount,
        totalLocationsCount,
        mostCommonCompanions,
    } = statistics

    useOnMount(() => {
        loadStatistics()
    })

    return (
        <>
            <h2>Statistics</h2>
            <GeneralStatistics
                totalNumOfBands={totalBandsCount}
                totalNumOfConcerts={totalConcertsCount}
                totalNumOfFestivals={totalFestivalsCount}
                totalNumOfLocations={totalLocationsCount}
            />
            <MostCommonCompanionsTable mostCommonCompanions={mostCommonCompanions} />
            <MostSeenBands mostSeenBands={mostSeenBands} />
        </>
    )
}

export default StatisticsView
