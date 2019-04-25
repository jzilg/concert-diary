import React, { Fragment, ReactElement } from 'react'
import Navigation from '../containers/Navigation'
import LoadConcerts from '../containers/LoadConcerts'
import MostSeenBands from '../containers/MostSeenBands'

function Statistics(): ReactElement {
    return (
        <Fragment>
            <h1>Statistics</h1>
            <Navigation />
            <LoadConcerts>
                <MostSeenBands />
            </LoadConcerts>
        </Fragment>
    )
}

export default Statistics
