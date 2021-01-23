import React, { FunctionComponent } from 'preact/compat'
import Header from '../header'
import FestivalsTable from '../../containers/FestivalsTableContainer'

const FestivalsView: FunctionComponent = () => (
    <>
        <Header />
        <FestivalsTable />
    </>
)

export default FestivalsView
