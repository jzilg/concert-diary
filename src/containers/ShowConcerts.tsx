import React, { Fragment, ReactElement } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/state.interface'
import { Concerts } from '../entities/Concert.interface'
import concertsSortedByDateSelector from '../redux/selectors/concertsSortedByDateSelector'
import { deleteConcert as deleteConcertActionCreator } from '../redux/actions/app/concerts.actions'
import Navigation from './Navigation'
import LoadConcerts from './LoadConcerts'
import ConcertsTable from '../components/ConcertsTable'

interface Props extends StateProps, DispatchProps {}

function ShowConcerts(props: Props): ReactElement {
    const { concerts, deleteConcert } = props

    return (
        <Fragment>
            <h1>Concert Diary</h1>
            <Navigation />
            <LoadConcerts>
                <ConcertsTable concerts={concerts} deleteConcert={deleteConcert} />
            </LoadConcerts>
        </Fragment>
    )
}

interface StateProps {
    concerts: Concerts
}

const mapStateToProps = (state: State): StateProps => ({
    concerts: concertsSortedByDateSelector(state),
})

interface DispatchProps {
    deleteConcert: Function
}

const mapDispatchToProps: DispatchProps = {
    deleteConcert: deleteConcertActionCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowConcerts)
