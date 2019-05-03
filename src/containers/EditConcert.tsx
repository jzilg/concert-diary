import React, { Fragment, ReactElement } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Concert from '../entities/Concert.interface'
import { postConcert, putConcert } from '../redux/actions/app/concerts.actions'
import Navigation from './Navigation'
import LoadData from './LoadData'
import ConcertForm from '../components/ConcertForm'
import getTodaysDate from '../utils/getTodaysDate'

interface Props extends StateProps, DispatchProps {}

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
        <Fragment>
            <h1>{title}</h1>
            <Navigation />
            <LoadData>
                <ConcertForm
                    concert={concert}
                    saveConcert={saveConcert}
                    goToConcerts={goToConcerts}
                />
            </LoadData>
        </Fragment>
    )
}

function createEmptyConcert(id: number): Concert {
    return {
        id,
        band: '',
        supportBands: [],
        location: '',
        date: getTodaysDate(),
        companions: [],
    }
}

interface StateProps {
    concert: Concert
    concertExists: boolean
}

const mapStateToProps = (state, ownProps): StateProps => {
    const paramId = parseInt(ownProps.match.params.id, 10)
    const concert = state.concerts.find(stateConcert => stateConcert.id === paramId)
    const concertExists: boolean = !!concert

    return {
        concert: concert || createEmptyConcert(paramId),
        concertExists,
    }
}

interface DispatchProps {
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
