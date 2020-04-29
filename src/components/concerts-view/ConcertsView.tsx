import React, { ReactElement } from 'react'
import Header from '../header'
import ConcertsTable from '../../containers/ConcertsTableContainer'

function ConcertsView(): ReactElement {
    return (
        <>
            <Header />
            <ConcertsTable />
        </>
    )
}

export default ConcertsView
