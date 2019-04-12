import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Concert from '../entities/Concert.interface'
import { addConcert, updateConcert } from '../redux/actions/concerts.actions'
import ConcertForm from '../components/ConcertForm'

interface Props extends StateProps, DispatchProps {}

function EditConcert(props: Props): ReactElement {
    const {
        concert,
        concertExists,
        addNewConcert,
        updateExistingConcert,
        goToHome,
    } = props

    const saveConcert = concertExists ? updateExistingConcert : addNewConcert

    return (
        <ConcertForm
            concert={concert}
            saveConcert={saveConcert}
            goToHome={goToHome}
        />
    )
}

function createEmptyConcert(id): Concert {
    return {
        id: parseInt(id, 10),
        act: [],
        supportAct: [],
        location: '',
        date: '',
        companions: [],
    }
}

interface StateProps {
    concert: Concert
    concertExists: boolean
}

const mapStateToProps = (state, ownProps): StateProps => {
    const { id } = ownProps.match.params
    const concert = state.concerts[id]
    const concertExists: boolean = !!concert

    return {
        concert: concert || createEmptyConcert(id),
        concertExists,
    }
}

interface DispatchProps {
    addNewConcert: Function
    updateExistingConcert: Function
    goToHome: Function
}

const mapDispatchToProps: DispatchProps = {
    addNewConcert: addConcert,
    updateExistingConcert: updateConcert,
    goToHome: push.bind(this, '/'),
}

export default connect(mapStateToProps, mapDispatchToProps)(EditConcert)
