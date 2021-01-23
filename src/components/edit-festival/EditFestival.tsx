import React, { FunctionComponent } from 'preact/compat'
import Festival, { FestivalId } from '../../entities/Festival'
import useOnMount from '../../hooks/useOnMount'
import Header from '../header'
import FestivalForm from '../festival-form'

export type Props = {
    festival: Festival
    loadFestival: (festivalId: FestivalId) => void
    saveFestival: Function
}

const EditFestival: FunctionComponent<Props> = (props) => {
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
