import React, { FunctionComponent } from 'preact/compat'
import Festival from '../../entities/Festival'
import Header from '../header'
import FestivalForm from '../festival-form'

export type Props = {
    festival: Festival
    saveNewFestival: Function
}

const NewFestival: FunctionComponent<Props> = (props) => {
    const {
        festival,
        saveNewFestival,
    } = props

    return (
        <>
            <Header />
            <h2>Add New Festival</h2>
            <FestivalForm
                festival={festival}
                saveFestival={saveNewFestival}
            />
        </>
    )
}

export default NewFestival
