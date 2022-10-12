import type { FC } from 'preact/compat'
import React from 'preact/compat'
import type Statistics from '../../entities/Statistics'
import MostSeenBands from '../most-seen-bands'
import GeneralStatistics from '../general-statistics'
import useOnMount from '../../hooks/useOnMount'
import MostCommonCompanionsTable from '../most-common-companions-table'
import style from './statisticsView.module.scss'

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
            <div className={style.tableContainer}>
                <div>
                    <MostSeenBands mostSeenBands={mostSeenBands} />
                </div>
                <div>
                    <MostCommonCompanionsTable mostCommonCompanions={mostCommonCompanions} />
                </div>
            </div>
        </>
    )
}

export default StatisticsView
