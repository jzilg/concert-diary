import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Concert from '../entities/Concert.interface'
import { addConcert } from '../redux/actions/concerts.actions'
import ConcertForm from '../components/ConcertForm'

interface Props extends StateProps, DispatchProps {}

function EditConcert({ concert, addNewConcert, goToHome }: Props): ReactElement {
    return <ConcertForm concert={concert} addConcert={addNewConcert} goToHome={goToHome} />
}

interface StateProps {
    concert: Concert
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

const mapStateToProps = (state, ownProps): StateProps => {
    const { id } = ownProps.match.params
    const concert = state.concerts[id] || createEmptyConcert(id)
    return {
        concert,
    }
}

interface DispatchProps {
    addNewConcert: Function
    goToHome: Function
}

const mapDispatchToProps: DispatchProps = {
    addNewConcert: addConcert,
    goToHome: push.bind(this, '/'),
}

export default connect(mapStateToProps, mapDispatchToProps)(EditConcert)
