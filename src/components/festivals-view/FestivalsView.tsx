import React, { ReactElement } from 'react'
import Header from '../header'
import FestivalsTable from '../../containers/FestivalsTableContainer'

function FestivalsView(): ReactElement {
    return (
        <>
            <Header />
            <FestivalsTable />
        </>
    )
}

export default FestivalsView
