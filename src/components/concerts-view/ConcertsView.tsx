import React, { FunctionComponent } from 'preact/compat'
import ConcertsTable from '../concerts-table'

const ConcertsView: FunctionComponent = () => (
    <>
        <h2>Concerts</h2>
        <ConcertsTable />
    </>
)

export default ConcertsView
