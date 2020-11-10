import React, { ReactElement } from 'react'
import Festival, { FestivalId } from '../../entities/Festival'
import useOnMount from '../../hooks/useOnMount'
import Header from '../header'
import FestivalForm from '../festival-form'

export type Props = {
    festival: Festival
    festivalExists: boolean
    loadFestival: (festivalId: FestivalId) => void
    saveFestival: Function
}

function EditFestival(props: Props): ReactElement {
    const {
        festival,
        festivalExists,
        loadFestival,
        saveFestival,
    } = props

    useOnMount(() => {
        loadFestival(festival.id)
    })

    const title = festivalExists ? 'Edit Festival' : 'Add New Festival'

    return (
        <>
            <Header />
            <h2>{title}</h2>
            <FestivalForm
                festival={festival}
                saveFestival={saveFestival}
            />
        </>
    )
}

export default EditFestival
