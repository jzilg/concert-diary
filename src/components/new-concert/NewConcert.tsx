import React, { FC } from 'preact/compat'
import Concert from '../../entities/Concert'
import ConcertForm from '../concert-form'

export type Props = {
    concert: Concert
    saveNewConcert: Function
}

const NewConcert: FC<Props> = (props) => {
    const {
        concert,
        saveNewConcert,
    } = props

    return (
        <>
            <h2>Add New Concert</h2>
            <ConcertForm
                concert={concert}
                saveConcert={saveNewConcert}
            />
        </>
    )
}

export default NewConcert
