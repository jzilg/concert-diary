import React, { FunctionComponent } from 'preact/compat'
import Header from '../header'
import FestivalsTable from '../../containers/FestivalsTableContainer'

const FestivalsView: FunctionComponent = () => (
    <>
        <Header />
        <h2>Festivals</h2>
        <FestivalsTable />
    </>
)

export default FestivalsView
