import React, { ReactElement } from 'react'
import Concert, { ConcertId } from '../../entities/Concert'
import useOnMount from '../../hooks/useOnMount'
import Header from '../header'
import ConcertForm from '../concert-form'

type Props = {
    concert: Concert
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
            <Header />
            <h2>Edit Concert</h2>
            <ConcertForm
                concert={concert}
                saveConcert={saveConcert}
            />
        </>
    )
}

export default EditConcert
