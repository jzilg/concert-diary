import type { FC } from 'preact/compat'
import React from 'preact/compat'
import ConcertsTable from '../concerts-table'

const ConcertsView: FC = () => (
    <>
        <h2>Concerts</h2>
        <ConcertsTable />
    </>
)

export default ConcertsView
