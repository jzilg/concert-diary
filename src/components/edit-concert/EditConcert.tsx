import React, { ReactElement } from 'react'
import Navigation from '../../containers/NavigationContainer'
import ConcertForm from '../concert-form'
import Concert from '../../entities/Concert'

type Props = {
    concert: Concert
    concertExists: boolean
    saveConcert: Function
}

function EditConcert(props: Props): ReactElement {
    const {
        concert,
        concertExists,
        saveConcert,
    } = props

    const title = concertExists ? 'Edit Concert' : 'Add New Concert'

    return (
        <>
            <h1>{title}</h1>
            <Navigation />
            <ConcertForm
                concert={concert}
                saveConcert={saveConcert}
            />
        </>
    )
}

export default EditConcert
