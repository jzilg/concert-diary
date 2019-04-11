import React, { Fragment, ReactElement } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/state.interface'
import { Concerts } from '../entities/Concert.interface'
import ConcertsTable from '../components/ConcertsTable'

interface Props extends StateProps {}

function App({ concerts }: Props): ReactElement {
    return (
        <Fragment>
            <h1>Concert Diary</h1>
            <ConcertsTable concerts={concerts} />
        </Fragment>
    )
}

interface StateProps {
    concerts: Concerts
}

const mapStateToProps = (state: State): StateProps => ({
    concerts: state.concerts,
})

export default connect(mapStateToProps)(App)
