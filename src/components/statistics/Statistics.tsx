import React, { ReactElement } from 'react'
import { MostSeenBand } from '../../redux/selectors/mostSeenBandsSelector'
import Navigation from '../../containers/NavigationContainer'
import MostSeenBands from '../most-seen-bands'
import GeneralStatistics from '../general-statistics'

type Props = {
    mostSeenBands: MostSeenBand[]
    totalNumOfConcerts: number
    totalNumOfFestivals: number
    totalNumOfBands: number
    totalNumOfLocations: number
}

function Statistics(props: Props): ReactElement {
    const {
        mostSeenBands,
        totalNumOfConcerts,
        totalNumOfFestivals,
        totalNumOfBands,
        totalNumOfLocations,
    } = props

    return (
        <>
            <h1>Statistics</h1>
            <Navigation />
            <GeneralStatistics
                totalNumOfBands={totalNumOfBands}
                totalNumOfConcerts={totalNumOfConcerts}
                totalNumOfFestivals={totalNumOfFestivals}
                totalNumOfLocations={totalNumOfLocations}
            />
            <MostSeenBands mostSeenBands={mostSeenBands} />
        </>
    )
}

export default Statistics
