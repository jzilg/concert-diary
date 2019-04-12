import React, { Fragment, ReactElement } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import State from '../redux/interfaces/state.interface'
import { Concerts } from '../entities/Concert.interface'
import { removeConcert } from '../redux/actions/concerts.actions'
import ConcertsTable from '../components/ConcertsTable'

interface Props extends StateProps, DispatchProps {}

function App(props: Props): ReactElement {
    const { concerts, deleteConcert } = props

    function createId(): number {
        return concerts.reduce((accumulator, concert) => concert.id + 1, 0)
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
    concerts: state.concerts,
})

interface DispatchProps {
    deleteConcert: Function
}

const mapDispatchToProps: DispatchProps = {
    deleteConcert: removeConcert,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
