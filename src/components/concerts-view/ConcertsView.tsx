import React, { ReactElement } from 'react'
import Navigation from '../../containers/NavigationContainer'
import ConcertsTable from '../../containers/ConcertsTableContainer'

function ConcertsView(): ReactElement {
    return (
        <>
            <h1>Concert Diary</h1>
            <Navigation />
            <ConcertsTable />
        </>
    )
}

export default ConcertsView
