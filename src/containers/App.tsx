import React, { Fragment, ReactElement } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import State from '../redux/interfaces/state.interface'
import { Concerts } from '../entities/Concert.interface'
import concertsSortedByDateSelector from '../redux/selectors/concertsSortedByDateSelector'
import useOnMount from '../hooks/useOnMount'
import {
    fetchConcerts as fetchConcertsActionCreator,
    deleteConcert as deleteConcertActionCreator,
} from '../redux/actions/app/concerts.actions'
import ConcertsTable from '../components/ConcertsTable'

interface Props extends StateProps, DispatchProps {}

function App(props: Props): ReactElement {
    const { concerts, fetchConcerts, deleteConcert } = props

    useOnMount(() => {
        if (!concerts.length) {
            fetchConcerts()
        }
    })

    function createId(): number {
        const getHighestId = (accumulator, concert): number => {
            const accumulatorIsHigher = accumulator > concert.id
            return accumulatorIsHigher ? accumulator : concert.id + 1
        }
        return concerts.reduce(getHighestId, 0)
    }

    const newConcertUrl = `edit/${createId()}`

    return (
        <Fragment>
            <h1>Concert Diary</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={newConcertUrl}>Add new concert</Link>
                    </li>
                </ul>
            </nav>
            <ConcertsTable concerts={concerts} deleteConcert={deleteConcert} />
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
    fetchConcerts: Function
    deleteConcert: Function
}

const mapDispatchToProps: DispatchProps = {
    fetchConcerts: fetchConcertsActionCreator,
    deleteConcert: deleteConcertActionCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
