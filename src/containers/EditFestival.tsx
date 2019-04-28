import React, { Fragment, ReactElement } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Festival from '../entities/Festival.interface'
import { postFestival, putFestival } from '../redux/actions/app/festivals.actions'
import Navigation from './Navigation'
import LoadConcerts from './LoadConcerts'
import FestivalForm from '../components/FestivalForm'

interface Props extends StateProps, DispatchProps {}

function EditFestival(props: Props): ReactElement {
    const {
        festival,
        festivalExists,
        addNewFestival,
        updateExistingFestival,
        goToHome,
    } = props

    const saveFestival = festivalExists ? updateExistingFestival : addNewFestival
    const title = festivalExists ? 'Edit Festival' : 'Add New Festival'

    return (
        <Fragment>
            <h1>{title}</h1>
            <Navigation />
            <LoadConcerts>
                <FestivalForm
                    festival={festival}
                    saveFestival={saveFestival}
                    goToHome={goToHome}
                />
            </LoadConcerts>
        </Fragment>
    )
}

function createEmptyFestival(id: number): Festival {
    return {
        id,
        date: {
            from: '',
            until: '',
        },
        name: '',
        bands: [],
        companions: [],
    }
}

interface StateProps {
    festival: Festival
    festivalExists: boolean
}

const mapStateToProps = (state, ownProps): StateProps => {
    const paramId = parseInt(ownProps.match.params.id, 10)
    const festival = state.festivals.find(stateFestival => stateFestival.id === paramId)
    const festivalExists: boolean = !!festival

    return {
        festival: festival || createEmptyFestival(paramId),
        festivalExists,
    }
}

interface DispatchProps {
    addNewFestival: Function
    updateExistingFestival: Function
    goToHome: Function
}

const mapDispatchToProps: DispatchProps = {
    addNewFestival: postFestival,
    updateExistingFestival: putFestival,
    goToHome: push.bind(this, '/'),
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFestival)
