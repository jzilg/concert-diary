import React, { ReactElement } from 'react'
import Festival, { FestivalId } from '../../entities/Festival'
import useOnMount from '../../hooks/useOnMount'
import Navigation from '../../containers/NavigationContainer'
import FestivalForm from '../festival-form'

type Props = {
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
            <h1>{title}</h1>
            <Navigation />
            <FestivalForm
                festival={festival}
                saveFestival={saveFestival}
            />
        </>
    )
}

export default EditFestival
