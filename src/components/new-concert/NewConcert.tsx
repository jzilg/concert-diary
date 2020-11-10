import React, { ReactElement } from 'react'
import Concert from '../../entities/Concert'
import Header from '../header'
import ConcertForm from '../concert-form'

export type Props = {
    concert: Concert
    saveNewConcert: Function
}

function NewConcert(props: Props): ReactElement {
    const {
        concert,
        saveNewConcert,
    } = props

    return (
        <>
            <Header />
            <h2>Add New Concert</h2>
            <ConcertForm
                concert={concert}
                saveConcert={saveNewConcert}
            />
        </>
    )
}

export default NewConcert
