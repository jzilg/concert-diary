import React, { ReactElement } from 'react'
import Navigation from '../../containers/NavigationContainer'
import FestivalForm from '../festival-form'
import Festival from '../../entities/Festival'

type Props = {
    festival: Festival
    festivalExists: boolean
    saveFestival: Function
}

function EditFestival(props: Props): ReactElement {
    const {
        festival,
        festivalExists,
        saveFestival,
    } = props

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
