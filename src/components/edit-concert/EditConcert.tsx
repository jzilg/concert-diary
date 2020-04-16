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
        loadConcert,
        saveConcert,
    } = props

    useOnMount(() => {
        loadConcert(concert.id)
    })

    return (
        <>
            <h1>Edit Concert</h1>
            <Navigation />
            <ConcertForm
                concert={concert}
                saveConcert={saveConcert}
            />
        </>
    )
}

export default EditConcert
