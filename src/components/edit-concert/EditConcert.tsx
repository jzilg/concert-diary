import type { FC } from 'preact/compat'
import React from 'preact/compat'
import type Concert from '../../entities/Concert'
import useOnMount from '../../hooks/useOnMount'
import ConcertForm from '../concert-form'

export type Props = {
    concert: Concert
    loadConcert: (concertId: Concert['id']) => void
    saveConcert: Function
}

const EditConcert: FC<Props> = (props) => {
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
            <h2>Edit Concert</h2>
            <ConcertForm
                concert={concert}
                saveConcert={saveConcert}
            />
        </>
    )
}

export default EditConcert
