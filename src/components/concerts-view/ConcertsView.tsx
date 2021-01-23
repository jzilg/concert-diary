import React, { FunctionComponent } from 'preact/compat'
import Header from '../header'
import ConcertsTable from '../../containers/ConcertsTableContainer'

const ConcertsView: FunctionComponent = () => (
    <>
        <Header />
        <ConcertsTable />
    </>
)

export default ConcertsView
