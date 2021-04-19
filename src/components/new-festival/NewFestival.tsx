import React, { FC } from 'preact/compat'
import Festival from '../../entities/Festival'
import FestivalForm from '../festival-form'

export type Props = {
    festival: Festival
    saveNewFestival: Function
}

const NewFestival: FC<Props> = (props) => {
    const {
        festival,
        saveNewFestival,
    } = props

    return (
        <>
            <h2>Add New Festival</h2>
            <FestivalForm
                festival={festival}
                saveFestival={saveNewFestival}
            />
        </>
    )
}

export default NewFestival
