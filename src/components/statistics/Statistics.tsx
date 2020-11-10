import React, { ReactElement } from 'react'
import { MostSeenBand } from '../../redux/selectors/mostSeenBandsSelector'
import Header from '../header'
import MostSeenBands from '../most-seen-bands'
import GeneralStatistics from '../general-statistics'
import useOnMount from '../../hooks/useOnMount'

export type Props = {
    mostSeenBands: MostSeenBand[]
    totalNumOfConcerts: number
    totalNumOfFestivals: number
    totalNumOfBands: number
    totalNumOfLocations: number
    loadConcerts: Function
    loadFestivals: Function
}

function Statistics(props: Props): ReactElement {
    const {
        mostSeenBands,
        totalNumOfConcerts,
        totalNumOfFestivals,
        totalNumOfBands,
        totalNumOfLocations,
        loadConcerts,
        loadFestivals,
    } = props

    useOnMount(() => {
        loadConcerts()
        loadFestivals()
    })

    return (
        <>
            <Header />
            <h2>Statistics</h2>
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
