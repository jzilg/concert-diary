import React, { ReactElement } from 'react'
import Concert, { ConcertId } from '../../entities/Concert'
import useOnMount from '../../hooks/useOnMount'
import Navigation from '../../containers/NavigationContainer'
import ConcertForm from '../concert-form'

type Props = {
    concert: Concert
    concertExists: boolean
    loadConcert: (concertId: ConcertId) => void
    saveConcert: Function
}

function EditConcert(props: Props): ReactElement {
    const {
        concert,
        concertExists,
        loadConcert,
        saveConcert,
    } = props

    useOnMount(() => {
        loadConcert(concert.id)
    })

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
