import React, { ReactElement } from 'react'
import Concert from '../../entities/Concert'
import Navigation from '../../containers/NavigationContainer'
import ConcertForm from '../concert-form'

type Props = {
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
            <h1>Add New Concert</h1>
            <Navigation />
            <ConcertForm
                concert={concert}
                saveConcert={saveNewConcert}
            />
        </>
    )
}

export default NewConcert
