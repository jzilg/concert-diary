import React, { FunctionComponent } from 'preact/compat'
import Header from '../header'
import ConcertsTable from '../../containers/ConcertsTableContainer'

const ConcertsView: FunctionComponent = () => (
    <>
        <Header />
        <h2>Concerts</h2>
        <ConcertsTable />
    </>
)

export default ConcertsView
