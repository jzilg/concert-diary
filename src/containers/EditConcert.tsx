import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Concert from '../entities/Concert'
import { postConcert, putConcert } from '../redux/actions/app/concerts.actions'
import Navigation from './Navigation'
import LoadData from './LoadData'
import ConcertForm from '../components/concert-form'
import todaysDate from '../utils/todaysDate'

type Props = StateProps & DispatchProps

function EditConcert(props: Props): ReactElement {
    const {
        concert,
        concertExists,
        addNewConcert,
        updateExistingConcert,
        goToConcerts,
    } = props

    const saveConcert = concertExists ? updateExistingConcert : addNewConcert
    const title = concertExists ? 'Edit Concert' : 'Add New Concert'

    return (
        <>
            <h1>{title}</h1>
            <Navigation />
            <LoadData concerts>
                <ConcertForm
                    concert={concert}
                    saveConcert={saveConcert}
                    goToConcerts={goToConcerts}
                />
            </LoadData>
        </>
    )
}

function createEmptyConcert(id: number): Concert {
    return {
        id,
        band: '',
        supportBands: [],
        location: '',
        date: todaysDate,
        companions: [],
    }
}

type StateProps = {
    concert: Concert
    concertExists: boolean
}

const mapStateToProps = (state, ownProps): StateProps => {
    const paramId = parseInt(ownProps.match.params.id, 10)
    const concert = state.concerts.find((stateConcert) => stateConcert.id === paramId)
    const concertExists = !!concert

    return {
        concert: concert || createEmptyConcert(paramId),
        concertExists,
    }
}

type DispatchProps = {
    addNewConcert: Function
    updateExistingConcert: Function
    goToConcerts: Function
}

const mapDispatchToProps: DispatchProps = {
    addNewConcert: postConcert,
    updateExistingConcert: putConcert,
    goToConcerts: push.bind(this, '/'),
}

export default connect(mapStateToProps, mapDispatchToProps)(EditConcert)
