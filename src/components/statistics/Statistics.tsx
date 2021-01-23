import React, { FunctionComponent } from 'preact/compat'
import MostSeenBand from '../../entities/MostSeenBand'
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
    loadStatistics: () => void
}

const Statistics: FunctionComponent<Props> = (props) => {
    const {
        mostSeenBands,
        totalNumOfConcerts,
        totalNumOfFestivals,
        totalNumOfBands,
        totalNumOfLocations,
        loadStatistics,
    } = props

    useOnMount(() => {
        loadStatistics()
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
