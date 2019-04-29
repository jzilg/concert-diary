import React, { Fragment, ReactElement } from 'react'
import { connect } from 'react-redux'
import State from '../redux/interfaces/state.interface'
import { Festivals } from '../entities/Festival.interface'
import festivalsSortedByDateSelector from '../redux/selectors/festivalsSortedByDateSelector'
import { deleteFestival as deleteFestivalActionCreator } from '../redux/actions/app/festivals.actions'
import Navigation from './Navigation'
import LoadConcerts from './LoadConcerts'
import FestivalsTable from '../components/FestivalsTable'

interface Props extends StateProps, DispatchProps {}

function ShowFestivals(props: Props): ReactElement {
    const { festivals, deleteFestival } = props

    return (
        <Fragment>
            <h1>Festival Diary</h1>
            <Navigation />
            <LoadConcerts>
                <FestivalsTable festivals={festivals} deleteFestival={deleteFestival} />
            </LoadConcerts>
        </Fragment>
    )
}

interface StateProps {
    festivals: Festivals
}

const mapStateToProps = (state: State): StateProps => ({
    festivals: festivalsSortedByDateSelector(state),
})

interface DispatchProps {
    deleteFestival: Function
}

const mapDispatchToProps: DispatchProps = {
    deleteFestival: deleteFestivalActionCreator,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowFestivals)