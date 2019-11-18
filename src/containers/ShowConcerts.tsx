import React, { ReactElement } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/State'
import { Concerts } from '../entities/Concert'
import concertsSortedByDateSelector from '../redux/selectors/concertsSortedByDateSelector'
import { deleteConcert as deleteConcertActionCreator } from '../redux/actions/app/concerts.actions'
import Navigation from './Navigation'
import LoadData from './LoadData'
import ConcertsTable from '../components/concerts-table'

type Props = StateProps & DispatchProps

function ShowConcerts(props: Props): ReactElement {
    const { concerts, deleteConcert } = props

    return (
        <>
            <h1>Concert Diary</h1>
            <Navigation />
            <LoadData concerts>
                <ConcertsTable concerts={concerts} deleteConcert={deleteConcert} />
            </LoadData>
        </>
    )
}

type StateProps = {
    concerts: Concerts
}

const mapStateToProps = (state: State): StateProps => ({
    concerts: concertsSortedByDateSelector(state),
})

type DispatchProps = {
    deleteConcert: Function
}

const mapDispatchToProps: DispatchProps = {
    deleteConcert: deleteConcertActionCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowConcerts)
