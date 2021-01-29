import React, { FunctionComponent } from 'preact/compat'
import Concert from '../../entities/Concert'
import useOnMount from '../../hooks/useOnMount'
import Header from '../header'
import ConcertForm from '../concert-form'

export type Props = {
    concert: Concert
    loadConcert: (concertId: Concert['id']) => void
    saveConcert: Function
}

const EditConcert: FunctionComponent<Props> = (props) => {
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
