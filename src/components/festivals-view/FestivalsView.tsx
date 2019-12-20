import React, { ReactElement } from 'react'
import Navigation from '../../containers/NavigationContainer'
import FestivalsTable from '../../containers/FestivalsTableContainer'

function FestivalsView(): ReactElement {
    return (
        <>
            <h1>Festival Diary</h1>
            <Navigation />
            <FestivalsTable />
        </>
    )
}

export default FestivalsView
