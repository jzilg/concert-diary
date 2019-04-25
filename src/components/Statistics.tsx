import React, { Fragment, ReactElement } from 'react'
import Navigation from '../containers/Navigation'
import LoadConcerts from '../containers/LoadConcerts'
import MostSeenBands from '../containers/MostSeenBands'
import GeneralStatistics from '../containers/GeneralStatistics'

function Statistics(): ReactElement {
    return (
        <Fragment>
            <h1>Statistics</h1>
            <Navigation />
            <LoadConcerts>
                <GeneralStatistics />
                <MostSeenBands />
            </LoadConcerts>
        </Fragment>
    )
}

export default Statistics
