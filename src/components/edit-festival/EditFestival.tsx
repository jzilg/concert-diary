import type { FC } from 'preact/compat'
import React from 'preact/compat'
import type { FestivalId } from '../../entities/Festival'
import type Festival from '../../entities/Festival'
import useOnMount from '../../hooks/useOnMount'
import FestivalForm from '../festival-form'

export type Props = {
    festival: Festival
    loadFestival: (festivalId: FestivalId) => void
    saveFestival: Function
}

const EditFestival: FC<Props> = (props) => {
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
            <h2>Edit Festival</h2>
            <FestivalForm
                festival={festival}
                saveFestival={saveFestival}
            />
        </>
    )
}

export default EditFestival
