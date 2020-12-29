import React, { ReactElement } from 'react'
import Festival, { FestivalId } from '../../entities/Festival'
import useOnMount from '../../hooks/useOnMount'
import Header from '../header'
import FestivalForm from '../festival-form'

export type Props = {
    festival: Festival
    loadFestival: (festivalId: FestivalId) => void
    saveFestival: Function
}

function EditFestival(props: Props): ReactElement {
    const {
        festival,
        loadFestival,
        saveFestival,
    } = props

    useOnMount(() => {
        loadFestival(festival.id)
    })

    return (
        <>
            <Header />
            <h2>Edit Festival</h2>
            <FestivalForm
                festival={festival}
                saveFestival={saveFestival}
            />
        </>
    )
}

export default EditFestival
